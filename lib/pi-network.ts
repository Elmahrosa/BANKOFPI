// Pi Network SDK Integration for Mainnet
export interface PiUser {
  uid: string
  username: string
}

export interface PaymentDTO {
  amount: number
  memo: string
  metadata: Record<string, any>
}

export interface PaymentCallbacks {
  onReadyForServerApproval: (paymentId: string) => void
  onReadyForServerCompletion: (paymentId: string, txid: string) => void
  onCancel: (paymentId: string) => void
  onError: (error: Error, payment?: any) => void
}

// Check if Pi SDK is available (in Pi Browser)
export const isPiSDKAvailable = (): boolean => {
  if (typeof window === "undefined") return false
  return !!(window as any).Pi
}

// Initialize Pi SDK
export const initPiSDK = async (): Promise<void> => {
  if (!isPiSDKAvailable()) {
    throw new Error("Pi SDK not available. Please open this app in Pi Browser.")
  }

  try {
    const Pi = (window as any).Pi
    await Pi.init({
      version: "2.0",
      sandbox: false, // Set to false for mainnet
    })
    console.log("[v0] Pi SDK initialized for mainnet")
  } catch (error) {
    console.error("[v0] Failed to initialize Pi SDK:", error)
    throw error
  }
}

// Authenticate user with Pi Network
export const authenticatePiUser = async (): Promise<PiUser> => {
  if (!isPiSDKAvailable()) {
    throw new Error("Pi SDK not available")
  }

  try {
    const Pi = (window as any).Pi
    const scopes = ["username", "payments"]
    const auth = await Pi.authenticate(scopes, onIncompletePaymentFound)
    console.log("[v0] User authenticated:", auth.user)
    return auth.user
  } catch (error) {
    console.error("[v0] Authentication failed:", error)
    throw error
  }
}

// Handle incomplete payments on app load
const onIncompletePaymentFound = (payment: any) => {
  console.log("[v0] Incomplete payment found:", payment)
  // Handle incomplete payment - usually complete it
  return (window as any).Pi.completePayment(payment.identifier)
}

// Create a payment
export const createPayment = async (paymentData: PaymentDTO, callbacks: PaymentCallbacks): Promise<void> => {
  if (!isPiSDKAvailable()) {
    throw new Error("Pi SDK not available")
  }

  try {
    const Pi = (window as any).Pi

    const payment = await Pi.createPayment(
      {
        amount: paymentData.amount,
        memo: paymentData.memo,
        metadata: paymentData.metadata,
      },
      {
        onReadyForServerApproval: (paymentId: string) => {
          console.log("[v0] Payment ready for approval:", paymentId)
          callbacks.onReadyForServerApproval(paymentId)
        },
        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          console.log("[v0] Payment ready for completion:", paymentId, txid)
          callbacks.onReadyForServerCompletion(paymentId, txid)
        },
        onCancel: (paymentId: string) => {
          console.log("[v0] Payment cancelled:", paymentId)
          callbacks.onCancel(paymentId)
        },
        onError: (error: Error, payment?: any) => {
          console.error("[v0] Payment error:", error, payment)
          callbacks.onError(error, payment)
        },
      },
    )

    console.log("[v0] Payment created:", payment)
  } catch (error) {
    console.error("[v0] Failed to create payment:", error)
    throw error
  }
}

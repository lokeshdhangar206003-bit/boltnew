import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CheckCircle2, X } from 'lucide-react';

type Toast = { id: number; title: string; message: string };
type ToastContextValue = { show: (title: string, message: string) => void };

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = useCallback((title: string, message: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, title, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  const dismiss = (id: number) => setToasts((t) => t.filter((toast) => toast.id !== id));

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-start gap-3 rounded-xl border border-green-200 bg-white p-4 shadow-2xl shadow-green-900/10 animate-slide-down w-80 max-w-[calc(100vw-3rem)]"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{toast.title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{toast.message}</p>
            </div>
            <button
              onClick={() => dismiss(toast.id)}
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

import { X } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'

type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error'

export interface ShowToastOptions {
    type?: ToastType
    message?: string
    description?: React.ReactNode
    position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center'
    onCancelClick?: () => void
}

const svaMap: Record<ToastType, string> = {
    default: '/images/indicator-default.svg',
    success: '/images/indicator-success.svg',
    info: '/images/indicator-info.svg',
    warning: '/images/indicator-warning.svg',
    error: '/images/indicator-error.svg',
}

const iconMap: Record<ToastType, string> = {
    default: '/images/icon-default.svg',
    success: '/images/icon-success.svg',
    info: '/images/icon-info.svg',
    warning: '/images/icon-warning.svg',
    error: '/images/icon-error.svg',
}

const bgMap: Record<ToastType, string> = {
    default: 'bg-gray-100',
    success: 'bg-green-100',
    info: 'bg-blue-100',
    warning: 'bg-orange-100',
    error: 'bg-red-100',
}

const textColorMap: Record<ToastType, string> = {
    default: 'text-gray-900',
    success: 'text-green-900',
    info: 'text-blue-900',
    warning: 'text-orange-900',
    error: 'text-red-900',
}

export function showToast({
    type = 'default',
    message = 'แจ้งเตือน',
    description,
    position = 'top-center',
    onCancelClick,
}: ShowToastOptions) {
    toast.dismiss()
    toast.custom(
        (id) => (
            <div
                className={clsx(
                    'relative flex gap-3 overflow-hidden rounded-lg p-4 shadow-lg sm:right-20 sm:min-w-[500px]',
                    bgMap[type],
                    description ? 'items-start' : 'items-center'
                )}
            >
                {/* SVG Background (absolute left) */}
                <Image
                    src={svaMap[type]}
                    alt="SVA Background"
                    height={56}
                    width={4}
                    className="absolute left-0 top-0 h-full w-[4px] object-cover"
                />

                {/* Icon */}
                <Image
                    src={iconMap[type]}
                    alt="Icon Taost"
                    className="h-6 w-auto shrink-0"
                    width={24}
                    height={24}
                />

                {/* Content */}
                <div className="flex-1">
                    <p
                        className={`text-sm font-medium leading-tight ${textColorMap[type]}`}
                    >
                        {message}
                    </p>
                    {description && (
                        <div
                            className={`mt-2 text-sm font-normal ${textColorMap[type]}`}
                        >
                            {description}
                        </div>
                    )}
                </div>

                {/* Close Button */}
                <X
                    className="h-[22px] w-auto cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => {
                        if (onCancelClick) onCancelClick()
                        toast.dismiss(id)
                    }}
                />
            </div>
        ),
        {
            position,
            className: '',
        }
    )
}

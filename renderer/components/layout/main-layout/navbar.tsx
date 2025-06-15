'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
    ArrowLeft,
    Loader2,
    PencilLine,
    Plus,
    Printer,
    Save,
    Share,
    Trash2,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DialogConfirm } from '@/components/dialogConfirm'


interface NavbarProps {
    className?: string
    titleClassName?: string
    isBackArrow?: boolean
    titleName?: string
    titleSave?: string
    titleAdd?: string
    titleCancel?: string
    titlePrint?: string
    titleDelete?: string
    titleEdit?: string
    titleCreate?: string
    titleShare?: string
    buttonPrint?: boolean
    buttonDel?: boolean
    buttonEdit?: boolean
    buttonAdd?: boolean
    buttonSave?: boolean
    buttonCancel?: boolean
    buttonCreate?: boolean
    buttonShare?: boolean
    isLoadingSave?: boolean
    disabledCreate?: boolean
    disabledSave?: boolean
    hiddenPrint?: boolean
    hiddenEdit?: boolean
    hiddenAdd?: boolean
    hiddenSave?: boolean
    hiddenShare?: boolean
    hiddenCancel?: boolean
    hiddenDelete?: boolean
    hiddenCreate?: boolean
    onClickPrint?: () => void
    onClickEdit?: () => void
    onClickAdd?: () => void
    onClickSave?: () => void
    onClickCreate?: () => void
    onClickShare?: () => void
    onSubmit?: () => void
}

export default function Navbar({
    className,
    titleClassName,
    isBackArrow = false,
    titleName,
    titleSave = 'บันทึก',
    titleAdd = 'เพิ่มข้อมูล',
    titleCancel = 'ยกเลิก',
    titlePrint = 'พิมพ์',
    titleDelete = 'ลบ',
    titleEdit = 'แก้ไข',
    titleCreate = 'สร้างข้อมูล',
    titleShare = 'แชร์',
    buttonShare = false,
    buttonPrint = false,
    buttonDel = false,
    buttonEdit = false,
    buttonAdd = false,
    buttonSave = false,
    buttonCancel = false,
    buttonCreate = false,
    isLoadingSave = false,
    disabledCreate = false,
    disabledSave = false,
    hiddenPrint = false,
    hiddenEdit = false,
    hiddenAdd = false,
    hiddenSave = false,
    hiddenCancel = false,
    hiddenDelete = false,
    hiddenCreate = false,
    hiddenShare = false,
    onClickPrint,
    onClickSave,
    onClickEdit,
    onClickAdd,
    onClickCreate,
    onClickShare,
    onSubmit,
}: NavbarProps & {
    hiddenAdd?: boolean
    hiddenSave?: boolean
    hiddenCancel?: boolean
    hiddenDelete?: boolean
    hiddenCreate?: boolean
}) {
    const router = useRouter()

    return (
        <nav className={className}>
            <div className="flex w-full flex-wrap justify-between gap-5">
                <div
                    className={`flex min-h-9 items-center justify-start gap-x-4 text-2xl font-medium ${titleClassName}`}
                >
                    {titleName && (
                        <>
                            {isBackArrow && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="size-9"
                                    onClick={() => router.back()}
                                >
                                    <ArrowLeft className="size-6" />
                                </Button>
                            )}
                            {titleName}
                        </>
                    )}
                </div>
                <div className="ml-auto flex flex-wrap gap-2">
                    {buttonDel && !hiddenDelete && (
                        <DialogConfirm
                            trigger={
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="min-w-[100px] rounded-xl"
                                >
                                    <Trash2 className="size-4" />
                                    {titleDelete}
                                </Button>
                            }
                        />
                    )}
                    {buttonCancel && !hiddenCancel && (
                        <Button
                            type="button"
                            variant="outline"
                            className="min-w-[100px] rounded-xl"
                            onClick={() => router.back()}
                        >
                            {titleCancel}
                        </Button>
                    )}
                    {buttonEdit && !hiddenEdit && (
                        <Button
                            variant="outline"
                            type="button"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickEdit}
                        >
                            <PencilLine className="size-4" />
                            {titleEdit}
                        </Button>
                    )}
                    {buttonShare && !hiddenShare && (
                        <Button
                            variant="outline"
                            type="button"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickShare}
                        >
                            <Share className="size-4" />
                            {titleShare ?? 'แชร์'}
                        </Button>
                    )}
                    {buttonPrint && !hiddenPrint && (
                        <Button
                            variant="outline"
                            type="button"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickPrint}
                        >
                            <Printer className="size-4" />
                            {titlePrint}
                        </Button>
                    )}
                    {buttonAdd && !hiddenAdd && (
                        <Button
                            type="button"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickAdd}
                        >
                            <Plus className="size-4" />
                            {titleAdd}
                        </Button>
                    )}
                    {buttonSave && !hiddenSave && (
                        <Button
                            type="submit"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickSave}
                            onSubmit={onSubmit}
                            disabled={disabledSave}
                        >
                            {isLoadingSave ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <Save className="size-4" />
                            )}
                            {titleSave}
                        </Button>
                    )}
                    {buttonCreate && !hiddenCreate && (
                        <Button
                            type="button"
                            className="min-w-[100px] rounded-xl"
                            onClick={onClickCreate}
                            onSubmit={onSubmit}
                            disabled={disabledCreate}
                        >
                            {titleCreate}
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    )
}

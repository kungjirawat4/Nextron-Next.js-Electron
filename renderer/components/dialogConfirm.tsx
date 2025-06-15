import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog'
import { Button } from './ui/button'


interface DialogModalProps {
    trigger: React.ReactNode
    title?: string
    subTitle?: string
    onConfirm?: () => void
}

export function DialogConfirm({
    trigger,
    onConfirm,
    title = 'ยืนยันการลบ',
    subTitle = 'การดำเนินการนี้ไม่สามารถย้อนกลับได้ คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้ ?',
}: DialogModalProps) {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <Dialog>
                <DialogTrigger asChild>{trigger}</DialogTrigger>
                <DialogContent className="m-0 w-[410px] p-0">
                    <DialogHeader>
                        <DialogTitle className="flex items-center justify-between border-b px-8 py-5">
                            {title}
                        </DialogTitle>
                        <DialogDescription className="border-b px-8 pb-5 pt-4 text-center text-base font-normal text-[#414651]">
                            {subTitle}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="grid grid-cols-2 gap-3 px-8 py-5 pt-2">
                        <DialogClose asChild>
                            <Button variant="outline">ยกเลิก</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={onConfirm} type="submit" size="lg">
                                ยืนยัน
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

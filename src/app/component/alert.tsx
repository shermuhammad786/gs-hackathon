import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function DialogCloseButton({ click, title, description, name }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-black text-white border-none" variant="outline">{name}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start gap-4">
                    <DialogClose asChild>
                        <Button onClick={click} type="button" className="w-full bg-black text-white border-none" variant="outline">
                            OK
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" className="w-full bg-black text-white border-none" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

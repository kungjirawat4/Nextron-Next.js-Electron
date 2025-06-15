// import { NoResultImage } from '@/constants/image'
import Image from 'next/image'
import NoResultImage from '@/public/images/noResult2.svg'

const NoResultsState = ({
    title = 'ไม่มีข้อมูล',
    className,
}: {
    title?: string
    className?: string
}) => (
    <div
        className={`flex flex-col items-center justify-center text-center ${className}`}
    >
        <Image
            src={NoResultImage}
            alt="No results Image"
            width={254}
            height={254}
            priority
        />
        <p className="-mt-5 text-base font-base text-gray-600">{title}</p>
    </div>
)

export default NoResultsState

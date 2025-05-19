import { Skeleton, Flex } from 'antd'
import SkeletonInput from 'antd/es/skeleton/Input'
import SkeletonImage from 'antd/es/skeleton/Image'

export default function Loading() {
    return (
        <Flex vertical gap={32}>
            <SkeletonInput size='large' active />
            <SkeletonImage style={{ width: 300, height: 300 }} active />
            <Skeleton title={false} paragraph={{ rows: 4 }} active />
        </Flex>
    )
}
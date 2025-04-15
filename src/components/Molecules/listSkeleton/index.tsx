import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from '../../../utils/helper';

const SkelonPlaceholder = () => {
  return (
      <SkeletonPlaceholder borderRadius={10}>
        <SkeletonPlaceholder.Item style={{marginHorizontal : wp(2)}}>
          <SkeletonPlaceholder.Item alignSelf='center' width={wp(98)} height={hp(25)} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
  );
};
export default SkelonPlaceholder;

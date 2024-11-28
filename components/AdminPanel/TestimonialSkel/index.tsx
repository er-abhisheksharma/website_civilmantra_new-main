import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Define the props type
interface TestimonialSkeletonProps {
  cards: number;
}

const TestimonialSkeleton: React.FC<TestimonialSkeletonProps> = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className="relative !h-[35vh] cursor-pointer w-full border-[1px] hover:border-gray-300 border-gray-200 p-4 rounded-xl hover:bg-white shadow-[0_0_30px_0px_rgba(0,0,0,0.03)] hover:shadow-none transition-all"
        key={i}
      >
        <div className="flex items-center justify-start gap-4 min-h-[10dvh] mb-2">
          {/* Skeleton for avatar */}
          <Skeleton circle width={56} height={56} />

          {/* Skeleton for name and company name */}
          <div className="flex flex-col items-start justify-center gap-2">
            <Skeleton width={150} height={20} className="mb-1" />
            <Skeleton width={120} height={15} />
          </div>

          {/* Skeleton for edit and delete buttons */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <Skeleton width={36} height={36} className="rounded-full" />
            <Skeleton width={36} height={36} className="rounded-full" />
          </div>
        </div>

        {/* Skeleton for position */}
        <Skeleton width={150} height={20} className="mb-2" />

        {/* Skeleton for reviews */}
        <Skeleton count={3} width="100%" height={15} className="mt-2" />
      </div>
    ));
};

export default TestimonialSkeleton;

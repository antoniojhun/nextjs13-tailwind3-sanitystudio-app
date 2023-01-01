import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavBar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#b8d2fb] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#b8d2fb] mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;

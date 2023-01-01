import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="/hand-drawn.png"
        alt="logo"
      ></Image>
    </div>
  );
}

export default Logo;

export default function TitleWithSubheader({ 
    title = "Best Title Ever", 
    subheader = "An amazing subheader goes here" 
  }) {
    return (
      <div className="tw-p-4 tw-translate-x-[4rem]">
        <h1 className="tw-text-4xl md:tw-text-6xl tw-font-extrabold tw-text-gray-800 tw-mb-2">
          {title}
        </h1>
        {/* <div className="tw-h-1 tw-w-24 md:tw-w-32 tw-bg-primary tw-rounded-full tw-mb-4" />
        <p className="tw-text-xl md:tw-text-2xl tw-text-center tw-text-gray-600 tw-max-w-2xl">
          {subheader}
        </p> */}
        <div className="space24" />
      </div>
    )
  }
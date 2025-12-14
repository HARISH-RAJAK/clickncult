import { cn } from "@/lib/utils";

const videoData = [
  {
    id: 1,
    videoUrl: "/videos/v1.mp4",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-3",
  },
  {
    id: 2,
    videoUrl: "/videos/growth.mp4",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 3,
    videoUrl: "/videos/get.mp4",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
    {
    id: 4,
    videoUrl: "/videos/v1.mp4",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
    {
    id: 5,
    videoUrl: "/videos/v2.mp4",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
    {
    id: 6,
    videoUrl: "/videos/advertise.mp4",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
];


export const VideoReel = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <br /><br /><br /><br />
        <div className="absolute inset-0 bg-black/70" />
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 h-full w-full">
          {videoData.map((video) => (
            <div
              key={video.id}
              className={cn("w-full h-full", video.colSpan, video.rowSpan)}
            >
              <video
                src={video.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
    </div>
  );
};
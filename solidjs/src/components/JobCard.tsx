import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function JobCard (props: any) {
  console.log(props);
  return (
    <div class="w-full rounded-lg shadow  grid grid-cols-6 gap-2">
      <div id="work-image" class="col-span-1">
        <Avatar class="mt-2">
          <AvatarImage src={props.work.image} />
          <AvatarFallback>{props.work.initials}</AvatarFallback>
        </Avatar>
      </div>
      <div id="work-details" class="col-span-5">
        <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.work.company}
        </h5>
        <p class="text-sm font-normal text-gray-600 dark:text-gray-200">
          {props.work.title}
        </p>
        <div id="date-range" class="text-sm font-normal text-gray-500 dark:text-gray-400 text-right px-4 pb-2">
          <span>{props.work.startDate} - {props.work.endDate}</span>
        </div>
      </div>
    </div>
  );
}
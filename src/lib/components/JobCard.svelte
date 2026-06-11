<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar/index';

  type Work = {
    image: string;
    company: string;
    initials: string;
    title: string;
    description?: string;
    startDate: string;
    endDate: string;
    url?: string;
  };

  let { work }: { work: Work } = $props();
</script>

<div class="grid w-full grid-cols-6 gap-2 rounded-lg shadow">
  <div id="work-image" class="col-span-1">
    <Avatar.Root class="mt-2">
      <Avatar.Image src={work.image} alt={work.company} />
      <Avatar.Fallback>{work.initials}</Avatar.Fallback>
    </Avatar.Root>
  </div>
  <div id="work-details" class="col-span-5">
    <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
      {work.company}
    </h5>
    <p class="text-sm font-normal text-gray-600 dark:text-gray-200">
      {work.title}
    </p>
    <div
      id="date-range"
      class="px-4 pb-2 text-right text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span>{work.startDate} - {work.endDate}</span>
    </div>
  </div>
</div>

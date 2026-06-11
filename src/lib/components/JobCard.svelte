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

<div
  class="grid w-full grid-cols-6 items-center gap-2 rounded-md border border-(--term-border) bg-[rgba(77,255,160,0.03)] p-2 transition-shadow hover:shadow-[0_0_16px_rgba(77,255,160,0.12)]"
>
  <div id="work-image" class="col-span-1">
    <Avatar.Root class="h-9 w-9 rounded border border-(--term-border)">
      <Avatar.Image src={work.image} alt={work.company} />
      <Avatar.Fallback>{work.initials}</Avatar.Fallback>
    </Avatar.Root>
  </div>
  <div id="work-details" class="col-span-5">
    <h5 class="text-sm font-semibold tracking-tight text-(--term-text)">
      {work.company}
    </h5>
    <p class="font-term text-xs text-(--term-muted)">
      {work.title}
    </p>
    <div id="date-range" class="font-term text-right text-xs text-(--term-green-dim)">
      <span>{work.startDate} — {work.endDate}</span>
    </div>
  </div>
</div>

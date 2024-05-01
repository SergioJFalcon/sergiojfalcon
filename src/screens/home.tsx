import { A } from '@solidjs/router';

import { Show, createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import HeroVideo from '@assets/videos/heroVideo.mp4';
import progressTimer from '@components/progressTimer';
import { Progress, ProgressLabel, ProgressValueLabel } from '@components/ui/progress';


export default function Home() {
  const [code, setCode] = createSignal(document.getElementsByTagName('HTML')[0].innerHTML);
  const [codeInput, setCodeInput] = createSignal('' as string);
  const loadingProgress = progressTimer(3);
  const [loading, setLoading] = createSignal(false);

  const inputCharByChar = (code: string) => {
    let i = 0;
    let input = '';
    const interval = setInterval(() => {
      if (i < code.length) {
        input += code.charAt(i);
        i++;
        setCodeInput(input);
      } else {
        clearInterval(interval);
      }
    }, 1);
  }
  
  onMount(() => {
    console.log('Home screen mounted')
    // inputCharByChar(code());
    setLoading(true);
  })

  // createEffect(() => {
  //   if(loadingProgress() >= 100) {
  //     setLoading(true);
  //   }
  // })

  return (
    <div class="h-full w-full object-cover">
      <div id="code-overlay" class="absolute right-0 bottom-0 z-[-1] min-w-full min-h-full bg-transparent object-cover text-white p-4">
          <pre>{codeInput()}</pre>
      </div>
      <Show when={loading()} fallback={
        <div class="h-full w-full object-cover flex flex-col items-center justify-center" >
          <Progress value={loadingProgress()} minValue={0} maxValue={100} getValueLabel={({ value, max }) => `${Math.round((value/max)*100)}%`} class="w-[300px] space-y-1">
            <div class="flex justify-between">
              <ProgressLabel>Processing...</ProgressLabel>
              <ProgressValueLabel />
            </div>
          </Progress>
        </div>
      }>
        <div class="h-full w-full">
          <video autoplay loop muted plays-inline class="absolute right-0 bottom-0 z-[-10] min-w-full min-h-full object-cover">
            <source src={HeroVideo} type="video/mp4" />
          </video>

          <div class="min-h-full min-w-full flex flex-col items-center justify-center">
            <div class="text-center">
              <h1 class="text-white text-6xl font-semibold">Sergio Falcon</h1>
              <A href="/about" target="_self" class="text-white text-xl inline-block border-2 border-white py-3 px-16 rounded-full mt-5">Enter</A>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}

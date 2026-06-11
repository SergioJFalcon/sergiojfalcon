import { A } from "@solidjs/router";
import { Link as LinkIcon } from 'lucide-solid';
import { For, Show, onMount } from "solid-js";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const ProjectCard = (props) => {
  onMount(() => {
    console.log(props);
  })
  return (
    <div>
      <Card>
        <CardHeader class="text-xl flex flex-row">
          <Avatar class="mr-4 h-12 w-12">
            <AvatarImage src={props.project.logo} />
            <AvatarFallback>{props.project.initials}</AvatarFallback>
          </Avatar><div>{props.project.name}</div>
        </CardHeader>
        <CardContent class="grid grid-cols-1">
          <div class="col-span-1">
          {props.project.description}
          </div>
        </CardContent>
        <CardFooter class="grid grid-cols-1">
          <Show when={props.project.techstack.length > 0}>
            <span class="text-lg">TechStack</span>
            <div class="col-span-1 px-4">
              <For each={props.project.techstack}>
                {(tech) => (
                  <Badge variant="outline" class="mr-1 mb-1">{tech}</Badge>
                )}
              </For>
            </div>
          </Show>
          <Show when={props.project.links.length > 0}>
            <div class="col-span-1 pt-4">
              <span class="text-lg flex"><LinkIcon class="mr-2"/>Links</span>
              <div class="px-4">
                <For each={props.project.links}>
                    {(link) => (
                    <A href={link.url} class="flex">{link.name}</A>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </CardFooter>
      </Card>
    </div>
  );
}
export default ProjectCard;
<script lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zod4Client } from 'sveltekit-superforms/adapters';
  import { toast } from 'svelte-sonner';
  import * as Form from '$lib/components/ui/form/index';
  import { Input } from '$lib/components/ui/input/index';
  import { Textarea } from '$lib/components/ui/textarea/index';
  import TermWindow from '$lib/components/TermWindow.svelte';
  import { contactSchema } from '$lib/schemas/contact';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  // superForm intentionally captures the initial form data once
  // svelte-ignore state_referenced_locally
  const form = superForm(data.form, {
    validators: zod4Client(contactSchema),
    onUpdated({ form }) {
      if (!form.message) return;
      if (form.valid) toast.success(form.message);
      else toast.error(form.message);
    }
  });
  const { form: formData, enhance, submitting } = form;

  const fieldClass =
    'font-term border-(--term-border) bg-[rgba(30,30,30,0.6)] text-(--term-text) placeholder:text-(--term-muted)/60 focus-visible:border-(--term-green-dim) focus-visible:ring-(--term-green-dim)/40';
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Get in touch with Sergio Falcon" />
</svelte:head>

<div class="min-h-full w-full py-8">
  <div class="font-term mb-3 text-sm text-(--term-muted)">
    <span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)"
      >~/contact</span
    >$ ./send_message
  </div>

  <div class="mx-auto w-full max-w-2xl">
    <TermWindow title="contact.sh" bodyClass="space-y-5">
      <p class="font-term text-sm text-(--term-muted)">
        <span class="text-(--term-amber)">&gt;</span> Drop me a message and I'll get back to you.
      </p>

      <form method="POST" use:enhance class="space-y-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Form.Field {form} name="name">
            <Form.Control>
              {#snippet children({ props })}
                <Form.Label class="font-term text-(--term-muted)">name</Form.Label>
                <Input
                  {...props}
                  bind:value={$formData.name}
                  placeholder="Ada Lovelace"
                  autocomplete="name"
                  class={fieldClass}
                />
              {/snippet}
            </Form.Control>
            <Form.FieldErrors class="font-term text-xs text-(--term-amber)" />
          </Form.Field>

          <Form.Field {form} name="email">
            <Form.Control>
              {#snippet children({ props })}
                <Form.Label class="font-term text-(--term-muted)">email</Form.Label>
                <Input
                  {...props}
                  type="email"
                  bind:value={$formData.email}
                  placeholder="ada@example.com"
                  autocomplete="email"
                  class={fieldClass}
                />
              {/snippet}
            </Form.Control>
            <Form.FieldErrors class="font-term text-xs text-(--term-amber)" />
          </Form.Field>
        </div>

        <Form.Field {form} name="subject">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label class="font-term text-(--term-muted)">subject</Form.Label>
              <Input
                {...props}
                bind:value={$formData.subject}
                placeholder="Let's build something"
                class={fieldClass}
              />
            {/snippet}
          </Form.Control>
          <Form.FieldErrors class="font-term text-xs text-(--term-amber)" />
        </Form.Field>

        <Form.Field {form} name="message">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label class="font-term text-(--term-muted)">message</Form.Label>
              <Textarea
                {...props}
                bind:value={$formData.message}
                rows={6}
                placeholder="Tell me about your project, idea, or just say hi..."
                class={fieldClass}
              />
            {/snippet}
          </Form.Control>
          <Form.FieldErrors class="font-term text-xs text-(--term-amber)" />
        </Form.Field>

        <!-- Honeypot: visually hidden, off the tab order; real users never fill it -->
        <div class="sr-only" aria-hidden="true">
          <label>
            Company
            <input type="text" tabindex="-1" autocomplete="off" bind:value={$formData.company} />
          </label>
        </div>

        <Form.Button
          disabled={$submitting}
          class="font-term w-full rounded-md border border-(--term-green-dim) bg-transparent text-(--term-green) hover:bg-[rgba(86,156,214,0.12)] disabled:opacity-60 sm:w-auto"
        >
          {$submitting ? 'sending...' : './send'}
        </Form.Button>
      </form>
    </TermWindow>
  </div>
</div>
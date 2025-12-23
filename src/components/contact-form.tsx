"use client";

import { useTransition } from "react";

import { useForm } from "@tanstack/react-form";
import { isValidPhoneNumber } from "libphonenumber-js/mobile";
import { toast } from "sonner";
import * as v from "valibot";

import { sendMail } from "@/actions";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import SuccessMessage from "./success-message";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

const devices = [
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "kiosk",
    label: "Kiosk",
  },
  {
    id: "mobile",
    label: "Mobile",
  },
  {
    id: "custom",
    label: "Custom hardware",
  },
] as const;

const budgets = [
  { label: "< €1000 (very small scope)", value: "under €1000" },
  { label: "€1000 - €2000", value: "€1000-€2000" },
  { label: "€2000 - €5000", value: "€2000-€5000" },
  { label: "€4000 - €10000", value: "€5000-€10000" },
  { label: "€10000+", value: "€10000+" },
] as const;

const timelines = [
  { label: "< 1 month", value: "under 1 month" },
  { label: "1-3 months", value: "1-3 months" },
  { label: "3-6 months", value: "3-6 months" },
  { label: "Flexible / not fixed", value: "flexible" },
] as const;

const formSchema = v.object({
  description: v.pipe(
    v.string(),
    v.nonEmpty("Description must not be empty."),
    v.maxLength(1500, "Description must be at most 1500 characters."),
  ),
  devices: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Please select at least one device type."),
    v.check(
      (value) => value.every((device) => devices.some((t) => t.id === device)),
      "Invalid device type selected.",
    ),
  ),
  budget: v.pipe(
    v.string(),
    v.minLength(1, "Please select a budget."),
    v.check(
      (val) => val !== "auto",
      "Auto-detection is not allowed. Please select a budget.",
    ),
  ),
  timeline: v.pipe(
    v.string(),
    v.minLength(1, "Please select a timeline."),
    v.check(
      (val) => val !== "auto",
      "Auto-detection is not allowed. Please select a timeline.",
    ),
  ),
  email: v.string(),
  phone: v.string(),
});

export type FormSchemaInput = v.InferInput<typeof formSchema>;

const defaultValues: FormSchemaInput = {
  description: "",
  devices: [],
  budget: "",
  timeline: "",
  email: "",
  phone: "",
};

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        const data = await sendMail(value);

        if (typeof data === "string") {
          toast.error(data);
          return;
        }
      });
    },
  });

  if (form.state.isSubmitted) {
    return <SuccessMessage />;
  }

  const isMutating = isPending || form.state.isSubmitting;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="flex flex-col gap-8"
    >
      {/* Description */}
      <FieldGroup>
        <form.Field name="description">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor="description" className="text-xl font-bold">
                  Project description / goal
                </FieldLabel>
                <Textarea
                  id="description"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  className="h-36 resize-none bg-white"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>

      {/* Platform Toggles */}
      <FieldGroup>
        <form.Field name="devices" mode="array">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <FieldSet>
                <FieldLegend
                  variant="label"
                  className="font-bold data-[variant=label]:text-xl"
                >
                  Platform / devices
                </FieldLegend>

                <FieldGroup data-slot="checkbox-group">
                  {devices.map((device) => (
                    <Field
                      key={device.id}
                      orientation="horizontal"
                      data-invalid={isInvalid}
                    >
                      <Checkbox
                        id={`checkbox-${device.id}`}
                        name={field.name}
                        aria-invalid={isInvalid}
                        checked={field.state.value.includes(device.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.pushValue(device.id);
                          } else {
                            const index = field.state.value.indexOf(device.id);
                            if (index > -1) {
                              field.removeValue(index);
                            }
                          }
                        }}
                        className="sr-only"
                      />

                      <Button
                        asChild
                        variant={
                          field.state.value.indexOf(device.id) > -1
                            ? "default"
                            : "secondary"
                        }
                        className="cursor-pointer font-bold"
                      >
                        <FieldLabel htmlFor={`checkbox-${device.id}`}>
                          {device.label}
                        </FieldLabel>
                      </Button>
                    </Field>
                  ))}
                </FieldGroup>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </FieldSet>
            );
          }}
        </form.Field>
      </FieldGroup>

      {/* Budget Dropdown */}
      <FieldGroup>
        <form.Field name="budget">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldContent className="gap-2">
                  <FieldLabel htmlFor="budget" className="text-xl font-bold">
                    Budget range
                  </FieldLabel>
                  <FieldDescription className="text-sm text-gray-700">
                    Budget is for guidance. Final proposal will be based on
                    project scope and complexity.
                  </FieldDescription>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </FieldContent>

                <Select
                  name={field.name}
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger
                    id="budget"
                    aria-invalid={isInvalid}
                    size="lg"
                    className="cursor-pointer bg-white text-lg md:max-w-2/3"
                  >
                    <SelectValue placeholder="Select a budget" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    <SelectItem value="auto" disabled hidden>
                      Select a budget
                    </SelectItem>
                    {budgets.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>

      {/* Timeline Dropdown */}
      <FieldGroup>
        <form.Field name="timeline">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldContent className="gap-2">
                  <FieldLabel htmlFor="timeline" className="text-xl font-bold">
                    Timeline
                  </FieldLabel>
                  <FieldDescription className="text-sm text-gray-700">
                    Timeline is indicative and depends on scope and
                    availability.
                  </FieldDescription>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </FieldContent>

                <Select
                  name={field.name}
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger
                    id="timeline"
                    aria-invalid={isInvalid}
                    size="lg"
                    className="cursor-pointer bg-white text-lg md:max-w-2/3"
                  >
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    <SelectItem value="auto" disabled hidden>
                      Select a timeline
                    </SelectItem>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>

      {/* Contact Info */}
      <FieldSet>
        <FieldLegend className="text-xl font-bold">Contact info</FieldLegend>
        <FieldDescription className="text-sm text-gray-700">
          Please provide at least one way to reach you (email or phone).
        </FieldDescription>
        <FieldGroup className="gap-4">
          <form.Field
            name="email"
            listeners={{
              onChange: ({ fieldApi }) => {
                const phoneValue = fieldApi.form.getFieldValue("phone");

                if (phoneValue.length === 0) {
                  fieldApi.form.setFieldMeta("phone", (meta) => ({
                    ...meta,
                    isTouched: false,
                    errorMap: { onSubmit: undefined },
                  }));
                }
              },
            }}
            validators={{
              onSubmit: ({ value, fieldApi }) => {
                const phoneValue = fieldApi.form.getFieldValue("phone");

                if (phoneValue.length !== 0 && value.length === 0) {
                  return undefined;
                }

                const parsedEmail = v.safeParse(
                  v.pipe(
                    v.string(),
                    v.nonEmpty("Please enter your email."),
                    v.email("The email is badly formatted."),
                  ),
                  value,
                );

                if (!parsedEmail.success) {
                  const error = parsedEmail.issues[0];
                  return error.message;
                }

                return undefined;
              },
            }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <div className="flex items-center gap-10">
                    <FieldLabel
                      htmlFor="email"
                      className="w-12 text-sm font-bold"
                    >
                      Email
                    </FieldLabel>
                    <Input
                      id="email"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="email"
                      className="h-11 bg-white md:w-2/3"
                    />
                  </div>
                  {isInvalid && field.state.meta.errorMap.onSubmit && (
                    <div className="submit-error">
                      {typeof field.state.meta.errorMap.onSubmit ===
                      "string" ? (
                        field.state.meta.errorMap.onSubmit
                      ) : (
                        <FieldError
                          errors={field.state.meta.errorMap.onSubmit}
                        />
                      )}
                    </div>
                  )}
                </Field>
              );
            }}
          </form.Field>

          <form.Field
            name="phone"
            listeners={{
              onChange: ({ fieldApi }) => {
                const emailValue = fieldApi.form.getFieldValue("email");

                if (emailValue.length === 0) {
                  fieldApi.form.setFieldMeta("email", (meta) => ({
                    ...meta,
                    isTouched: false,
                    errorMap: { onSubmit: undefined },
                  }));
                }
              },
            }}
            validators={{
              onSubmit: ({ value, fieldApi }) => {
                const emailValue = fieldApi.form.getFieldValue("email");

                if (emailValue.length !== 0 && value.length === 0) {
                  return undefined;
                }

                const parsedPhone = v.safeParse(
                  v.pipe(
                    v.string(),
                    v.nonEmpty("Please enter your phone number."),
                    v.check(
                      (value) => isValidPhoneNumber(value),
                      "Invalid phone number.",
                    ),
                  ),
                  value,
                );

                if (!parsedPhone.success) {
                  const error = parsedPhone.issues[0];
                  return error.message;
                }

                return undefined;
              },
            }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <div className="flex items-center gap-10">
                    <FieldLabel
                      htmlFor="phone"
                      className="w-12 text-sm font-bold"
                    >
                      Phone
                    </FieldLabel>
                    <Input
                      id="phone"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="email"
                      className="h-11 bg-white md:w-2/3"
                    />
                  </div>
                  {isInvalid && field.state.meta.errorMap.onSubmit && (
                    <div className="submit-error">
                      {typeof field.state.meta.errorMap.onSubmit ===
                      "string" ? (
                        field.state.meta.errorMap.onSubmit
                      ) : (
                        <FieldError
                          errors={field.state.meta.errorMap.onSubmit}
                        />
                      )}
                    </div>
                  )}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>
      </FieldSet>

      <Button className="self-center font-bold" disabled={isMutating}>
        {isMutating && <Spinner />}
        {isMutating ? "Submitting..." : "Request Project Quote"}
      </Button>
    </form>
  );
}

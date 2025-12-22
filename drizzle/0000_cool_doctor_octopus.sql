CREATE TABLE "forms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"description" text NOT NULL,
	"devices" text[] NOT NULL,
	"budget" text NOT NULL,
	"timeline" text NOT NULL,
	"email" text,
	"phone" text,
	CONSTRAINT "forms_email_unique" UNIQUE("email"),
	CONSTRAINT "forms_phone_unique" UNIQUE("phone")
);

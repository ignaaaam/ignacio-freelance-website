/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "astro" {
  interface Locals {
    locale?: string;
  }
}
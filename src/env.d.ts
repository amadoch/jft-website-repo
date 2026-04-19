/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
	interface ImportMetaEnv {
  	readonly CMS_URL: string;
  	readonly CMS_TOKEN: string;
	}
}

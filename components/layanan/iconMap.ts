import {
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  ShieldExclamationIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import type { LayananIconKey } from "@/types/layanan";

/** Peta ikon per layanan. Konsisten dengan ICON_MAP di components/home/LayananUnggulan.tsx. */
export const LAYANAN_ICON_MAP: Record<LayananIconKey, typeof HeartIcon> = {
  umum: HeartIcon,
  gigi: SparklesIcon,
  kia: UserGroupIcon,
  farmasi: ClipboardDocumentCheckIcon,
  lab: BeakerIcon,
  ugd: ShieldExclamationIcon,
  imunisasi: ShieldExclamationIcon,
  posyandu: UserGroupIcon,
  promkes: MegaphoneIcon,
};

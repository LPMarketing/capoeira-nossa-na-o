export interface BioLink {
  id: 'whatsapp' | 'instagram' | 'website';
  label: string;
  href: string;
  primary?: boolean;
}

export interface MasterProfile {
  id: string;
  name: string;
  handle: string;
  href: string;
}

export const BRAND = {
  name: 'Capoeira Nossa Nação',
  subtitle: 'Venha fazer parte da nossa roda.',
  logoSrc: '/assets/aistudio/logo_cnn_sem_fundo_344ceb0e.png',
  logoAlt: 'Logo oficial da academia Capoeira Nossa Nação — Mestre Apache',
} as const;

export const TOP_LINKS: BioLink[] = [
  {
    id: 'whatsapp',
    label: 'Fale com a gente no WhatsApp',
    href: 'https://wa.me/5562999868309?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20capoeira.',
    primary: true,
  },
  {
    id: 'website',
    label: 'Acesse nosso site',
    href: 'https://www.capoeiranossanacao.com.br',
  },
];

export const INSTAGRAM_LINK = {
  id: 'instagram' as const,
  label: 'Siga nosso Instagram',
  handle: '@capoeiranossanacao_oficial',
  href: 'https://www.instagram.com/capoeiranossanacao_oficial/',
};

export const LOCATION = {
  title: 'Como chegar',
  cta: 'Abrir no Google Maps',
  href: 'https://maps.app.goo.gl/tBxXZZhFkNcy5Pyw6',
} as const;

export const MASTERS_SECTION = {
  title: 'Siga o perfil dos mestres',
  profiles: [
    {
      id: 'mestre-apache',
      name: 'Mestre Apache',
      handle: '@mestreapache_cnn',
      href: 'https://www.instagram.com/mestreapache_cnn/',
    },
    {
      id: 'mestra-josy',
      name: 'Mestra Josy',
      handle: '@mestra_josy',
      href: 'https://www.instagram.com/mestra_josy/',
    },
  ] as MasterProfile[],
};

export const CLICAE_PROMO = {
  kicker: 'CRIADO POR CLICAÊ',
  title: 'Sua empresa também pode ter uma bio assim.',
  cta: 'Quero o meu',
  credit: 'Produzido por Clicaê Bio',
  href: 'https://www.instagram.com/clicaebio/',
  logoSrc: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_22.41.29_be5d0219.jpeg',
  logoAlt: 'Logo oficial da Clicaê Bio',
} as const;


export interface ContactInfo {
  firstName: string;
  lastName: string;
  nickname?: string;
  title: string;
  organization: string;
  emails: string[];
  phones: string[];
  websites: string[];
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  note?: string;
}

export function generateVCard(info: ContactInfo): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${info.lastName};${info.firstName};;;`,
    `FN:${info.firstName} ${info.lastName}`,
  ];

  if (info.nickname) {
    lines.push(`NICKNAME:${info.nickname}`);
  }

  lines.push(`ORG:${info.organization}`);
  lines.push(`TITLE:${info.title}`);

  info.emails.forEach(email => {
    lines.push(`EMAIL;TYPE=INTERNET,WORK:${email}`);
  });

  info.phones.forEach(phone => {
    lines.push(`TEL;TYPE=CELL,WORK:${phone}`);
  });

  info.websites.forEach(web => {
    lines.push(`URL;TYPE=WORK:${web}`);
  });

  if (info.address) {
    const { street, city, state, postalCode, country } = info.address;
    lines.push(`ADR;TYPE=WORK:;;${street || ''};${city || ''};${state || ''};${postalCode || ''};${country || ''}`);
  }

  if (info.note) {
    lines.push(`NOTE:${info.note.replace(/\n/g, '\\n')}`);
  }

  lines.push('END:VCARD');

  return lines.join('\n');
}

export function downloadVCard(info: ContactInfo) {
  const vcard = generateVCard(info);
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${info.firstName}_${info.lastName}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

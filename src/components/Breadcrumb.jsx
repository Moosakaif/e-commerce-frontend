import Link from 'next/link';

export default function Breadcrumb({ links }) {
  return (
    <ul className="flex space-x-2 text-sm text-white mt-2">
      {links.map((link, index) => (
        <li key={index} className="breadcrumb-list">
          {link.active ? (
            <span className="font-bold">{link.label}</span>
          ) : (
            <>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
              {index < links.length - 1 && <span className="mx-2">/</span>}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

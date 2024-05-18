import { LinkField, FilledLinkToDocumentField } from '@prismicio/types';

export function getMovieLink(link: LinkField){
  if (link.link_type === 'Document') {
    const documentLink = link as FilledLinkToDocumentField;
    const uid = documentLink.uid;
    return `/filmes/${uid}`;
  } else {
    return ''
  }
}

export function getIntitutionalLink(link: LinkField){
  if (link.link_type === 'Document') {
    const documentLink = link as FilledLinkToDocumentField;
    const uid = documentLink.uid;
    return `/institucional/${uid}`;
  } else {
    return ''
  }
}
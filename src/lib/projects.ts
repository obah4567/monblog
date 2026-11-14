import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'e-gandhal',
    name: 'E-Gandhal',
    description: 'Plateforme de gestion scolaire complète pour digitaliser l\'administration des établissements éducatifs.',
    longDescription: `
E-Gandhal est une solution de gestion scolaire conçue pour moderniser l'administration des établissements éducatifs en Afrique,
de la maternelle à l'enseignement supérieur.

## Contexte

Face au manque de digitalisation des administrations en Afrique, j'ai créé cette plateforme pour faciliter l'administration
et la communication au sein des établissements éducatifs, tout en simplifiant les démarches des usagers.

## Fonctionnalités principales

- **Authentification et gestion des rôles** : Création de comptes, connexion sécurisée, permissions par rôle (directeurs, personnels administratifs).
- **Gestion des élèves** : Fiches complètes, suivi des paiements, export PDF, visualisation des données par graphiques.
- **Gestion des enseignants** : Fiches détaillées, attribution des notes, suivi des classes.
- **Gestion des classes** : Organisation des enseignants, matières, options.
- **Comptabilité** : Suivi des paiements, gestion des salaires, export Excel/PDF.
- **Fonctionnalités à venir** : Certificats de scolarité, résultats et classements, emplois du temps.

## Architecture technique

Backend construit avec ASP.NET Core 8 et SQL Server pour une gestion robuste et scalable.
Frontend développé avec React.js pour une interface conviviale.
Visualisation des données via Chart.js et FullCalendar.js.

## Résultats

Le backend est actuellement opérationnel et permet la gestion complète des fonctionnalités mentionnées.
Le frontend est en cours de développement pour fournir une interface utilisateur interactive.
    `,
    technologies: ['ASP.NET Core 8', 'SQL Server', 'React', 'Chart.js', 'FullCalendar.js'],
    githubUrl: 'https://github.com/obah4567/E-Gandhal',
    featured: true,
    thumbnail: '/images/e-gandhal.jpg',
    year: 2024,
  },
  {
    id: 'go-projet-ia',
    name: 'GO Projet IA',
    description: 'Intelligence artificielle pour jouer au jeu de Go — exploration de l\'arbre de jeu et tournoi inter-joueurs.',
    longDescription: `
Projet universitaire d'IA appliquée au jeu de Go. L'objectif était de concevoir un joueur artificiel
capable de participer à un tournoi en respectant les règles officielles du jeu.

## Contexte

Le jeu de Go est l'un des jeux de stratégie les plus complexes qui soit. Ce projet avait pour but
d'implémenter une IA capable d'explorer efficacement l'arbre de jeu et de prendre des décisions stratégiques
dans un temps contraint.

## Architecture

- **Goban.py** : Moteur de jeu avec les règles du Go, exploration de l'arbre via \`legal_moves()\`, \`push()\`/\`pop()\`.
- **myPlayer.py** : L'IA développée pour le tournoi, basée sur des algorithmes d'exploration.
- **playerInterface.py** : Interface abstraite garantissant la compatibilité avec le tournoi.
- **localGame.py** : Lanceur de matchs en local pour tester l'IA contre elle-même.
- **GnuGo.py** : Connecteur avec GnuGo pour s'y mesurer.

## Approche technique

Gestion des coups internes (indices 1D dans le tableau de plateau) et externes (notation algébrique "A1"…"J9", "PASS").
Exploration de l'arbre de jeu avec \`legal_moves\` et \`weak_legal_moves\`, avec gestion des règles du Ko.

## Résultats

IA fonctionnelle et intégrée au tournoi de la promotion. Participation compétitive face aux autres joueurs de la promo.
    `,
    technologies: ['Python', 'GnuGo', 'Algorithmes IA', 'Théorie des jeux'],
    githubUrl: 'https://github.com/obah4567/GO_Projet_IA',
    featured: true,
    thumbnail: '/images/go-projet-ia.jpg',
    year: 2024,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

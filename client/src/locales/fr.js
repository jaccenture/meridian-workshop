export default {
  // Navigation
  nav: {
    overview: 'Vue d\'ensemble',
    inventory: 'Inventaire',
    orders: 'Commandes',
    finance: 'Finance',
    demandForecast: 'Prévisions de demande',
    restocking: 'Réapprovisionnement',
    reports: 'Rapports',
    companyName: 'Catalyst Components',
    subtitle: 'Système de gestion des stocks'
  },

  // Dashboard
  dashboard: {
    title: 'Vue d\'ensemble',
    kpi: {
      title: 'Indicateurs clés de performance',
      inventoryTurnover: 'Taux de rotation des stocks',
      ordersFulfilled: 'Commandes exécutées',
      orderFillRate: 'Taux d\'exécution',
      revenue: 'Chiffre d\'affaires (commandes)',
      revenueYTD: 'CA (commandes) cumul annuel',
      revenueMTD: 'CA (commandes) cumul mensuel',
      avgProcessingTime: 'Délai moyen de traitement (jours)',
      goal: 'Objectif'
    },
    summary: {
      title: 'Résumé'
    },
    orderHealth: {
      title: 'Santé des commandes',
      totalOrders: 'Total des commandes',
      revenue: 'Chiffre d\'affaires',
      avgOrderValue: 'Valeur moyenne des commandes',
      onTimeRate: 'Taux de livraison à temps',
      avgFulfillmentDays: 'Délai moyen d\'exécution (jours)',
      total: 'Total'
    },
    ordersByMonth: {
      title: 'Commandes par mois'
    },
    inventoryValue: {
      title: 'Valeur des stocks par catégorie'
    },
    inventoryShortages: {
      title: 'Ruptures de stock',
      noShortages: 'Aucune rupture de stock - toutes les commandes peuvent être exécutées !',
      noData: 'Aucune donnée pour les filtres sélectionnés',
      orderId: 'N° commande',
      sku: 'SKU',
      itemName: 'Désignation',
      quantityNeeded: 'Quantité requise',
      quantityAvailable: 'Quantité disponible',
      shortage: 'Manquant',
      daysDelayed: 'Jours de retard',
      priority: 'Priorité',
      unitsShort: 'unités manquantes',
      days: 'jours'
    },
    topProducts: {
      title: 'Meilleurs produits par chiffre d\'affaires',
      sku: 'SKU',
      product: 'Produit',
      category: 'Catégorie',
      warehouse: 'Entrepôt',
      stockStatus: 'État du stock',
      revenue: 'Chiffre d\'affaires',
      unitsOrdered: 'Unités commandées',
      firstOrder: 'Première commande',
      inStock: 'En stock',
      lowStock: 'Stock faible'
    }
  },

  // Inventory
  inventory: {
    title: 'Inventaire',
    description: 'Suivre et gérer tous les articles en stock',
    stockLevels: 'Niveaux de stock',
    skus: 'SKU',
    searchPlaceholder: 'Rechercher par nom d\'article...',
    clearSearch: 'Effacer la recherche',
    totalItems: 'Total des articles',
    totalValue: 'Valeur totale',
    lowStockItems: 'Articles en stock faible',
    warehouses: 'Entrepôts',
    table: {
      sku: 'SKU',
      itemName: 'Désignation',
      name: 'Nom',
      category: 'Catégorie',
      warehouse: 'Entrepôt',
      quantity: 'Quantité',
      quantityOnHand: 'Stock disponible',
      reorderPoint: 'Point de réapprovisionnement',
      unitCost: 'Coût unitaire',
      unitPrice: 'Prix unitaire',
      totalValue: 'Valeur totale',
      location: 'Emplacement',
      status: 'Statut'
    }
  },

  // Orders
  orders: {
    title: 'Commandes',
    description: 'Consulter et gérer les commandes clients',
    allOrders: 'Toutes les commandes',
    totalOrders: 'Total des commandes',
    totalRevenue: 'Chiffre d\'affaires total',
    avgOrderValue: 'Valeur moyenne des commandes',
    onTimeDelivery: 'Livraison à temps',
    itemsCount: '{count} article(s)',
    quantity: 'Qté',
    table: {
      orderNumber: 'N° commande',
      orderId: 'ID commande',
      orderDate: 'Date de commande',
      date: 'Date',
      customer: 'Client',
      category: 'Catégorie',
      warehouse: 'Entrepôt',
      items: 'Articles',
      value: 'Valeur',
      totalValue: 'Valeur totale',
      status: 'Statut',
      expectedDelivery: 'Livraison prévue',
      actualDelivery: 'Livraison effective'
    }
  },

  // Finance/Spending
  finance: {
    title: 'Tableau de bord financier',
    description: 'Suivre le chiffre d\'affaires, les coûts et la performance financière',
    totalRevenue: 'Chiffre d\'affaires total',
    totalCosts: 'Coûts totaux',
    netProfit: 'Bénéfice net',
    avgOrderValue: 'Valeur moyenne des commandes',
    fromOrders: 'Sur {count} commande(s)',
    costBreakdown: 'Achats + Exploitation + Main-d\'œuvre + Frais généraux',
    margin: 'marge',
    perOrderRevenue: 'CA par commande',
    revenueVsCosts: {
      title: 'CA mensuel vs coûts',
      revenue: 'Chiffre d\'affaires',
      costs: 'Coûts totaux'
    },
    monthlyCostFlow: {
      title: 'Flux de coûts mensuels',
      procurement: 'Achats',
      operational: 'Exploitation',
      labor: 'Main-d\'œuvre',
      overhead: 'Frais généraux'
    },
    categorySpending: {
      title: 'Dépenses par catégorie',
      ofTotal: 'du total'
    },
    transactions: {
      title: 'Transactions récentes',
      id: 'ID',
      description: 'Description',
      vendor: 'Fournisseur',
      date: 'Date',
      amount: 'Montant'
    }
  },

  // Demand Forecast
  demand: {
    title: 'Prévisions de demande',
    description: 'Analyser les tendances de la demande et les prévisions',
    increasingDemand: 'Demande en hausse',
    stableDemand: 'Demande stable',
    decreasingDemand: 'Demande en baisse',
    itemsCount: '{count} article(s)',
    more: 'plus...',
    demandForecasts: 'Prévisions de demande',
    table: {
      sku: 'SKU',
      itemName: 'Désignation',
      currentDemand: 'Demande actuelle',
      forecastedDemand: 'Demande prévue',
      change: 'Variation',
      trend: 'Tendance',
      period: 'Période'
    }
  },

  // Reports
  reports: {
    title: 'Rapports de performance',
    description: 'Consulter les indicateurs trimestriels et les tendances mensuelles',
    quarterly: {
      title: 'Performance trimestrielle',
      quarter: 'Trimestre',
      totalOrders: 'Total des commandes',
      totalRevenue: 'Chiffre d\'affaires total',
      avgOrderValue: 'Valeur moyenne des commandes',
      fulfillmentRate: 'Taux d\'exécution'
    },
    monthlyTrend: {
      title: 'Tendance mensuelle du CA'
    },
    monthOverMonth: {
      title: 'Analyse mois par mois',
      month: 'Mois',
      orders: 'Commandes',
      revenue: 'Chiffre d\'affaires',
      change: 'Variation',
      growthRate: 'Taux de croissance'
    },
    summary: {
      totalRevenue: 'CA total (cumul annuel)',
      avgMonthlyRevenue: 'CA mensuel moyen',
      totalOrders: 'Total des commandes (cumul annuel)',
      bestQuarter: 'Meilleur trimestre'
    },
    loading: 'Chargement des rapports...',
    error: 'Impossible de charger les rapports'
  },

  // Restocking
  restocking: {
    title: 'Recommandations de réapprovisionnement',
    description: 'Recommandations de commandes d\'achat basées sur les niveaux de stock et les prévisions',
    budgetCeiling: 'Plafond budgétaire',
    allCandidates: 'Articles à réapprovisionner',
    withinBudget: 'Dans le budget',
    totalCost: 'Coût total estimé',
    costWithinBudget: 'Coût dans le budget',
    withinBudgetBadge: 'Dans le budget',
    overBudgetBadge: 'Hors budget',
    noCandidates: 'Tous les articles sont correctement approvisionnés',
    table: {
      sku: 'SKU',
      itemName: 'Désignation',
      category: 'Catégorie',
      warehouse: 'Entrepôt',
      currentStock: 'Stock actuel',
      reorderPoint: 'Point de réapprovisionnement',
      forecastedDemand: 'Demande prévue',
      recommendedQty: 'Qté recommandée',
      unitCost: 'Coût unitaire',
      estimatedCost: 'Coût estimé',
      status: 'Statut'
    }
  },

  // Filters
  filters: {
    timePeriod: 'Période',
    location: 'Site',
    category: 'Catégorie',
    orderStatus: 'Statut de commande',
    all: 'Tous',
    allMonths: 'Tous les mois'
  },

  // Statuses
  status: {
    delivered: 'Livré',
    shipped: 'Expédié',
    processing: 'En cours',
    backordered: 'En rupture',
    inStock: 'En stock',
    lowStock: 'Stock faible',
    adequate: 'Suffisant'
  },

  // Trends
  trends: {
    increasing: 'en hausse',
    stable: 'stable',
    decreasing: 'en baisse'
  },

  // Priority
  priority: {
    high: 'Haute',
    medium: 'Moyenne',
    low: 'Basse'
  },

  // Categories
  categories: {
    circuitBoards: 'Circuits imprimés',
    sensors: 'Capteurs',
    actuators: 'Actionneurs',
    controllers: 'Contrôleurs',
    powerSupplies: 'Alimentations'
  },

  // Spending Categories
  spendingCategories: {
    rawMaterials: 'Matières premières',
    components: 'Composants',
    equipment: 'Équipement',
    consumables: 'Consommables'
  },

  // Warehouses
  warehouses: {
    sanFrancisco: 'San Francisco',
    london: 'Londres',
    tokyo: 'Tokyo'
  },

  // Months
  months: {
    jan: 'Jan',
    feb: 'Fév',
    mar: 'Mar',
    apr: 'Avr',
    may: 'Mai',
    jun: 'Juin',
    jul: 'Juil',
    aug: 'Août',
    sep: 'Sep',
    oct: 'Oct',
    nov: 'Nov',
    dec: 'Déc',
    january: 'Janvier',
    february: 'Février',
    march: 'Mars',
    april: 'Avril',
    june: 'Juin',
    july: 'Juillet',
    august: 'Août',
    september: 'Septembre',
    october: 'Octobre',
    november: 'Novembre',
    december: 'Décembre'
  },

  // Profile Menu
  profile: {
    profileDetails: 'Détails du profil',
    myTasks: 'Mes tâches',
    logout: 'Déconnexion'
  },

  // Profile Details Modal
  profileDetails: {
    title: 'Détails du profil',
    email: 'E-mail',
    department: 'Département',
    location: 'Site',
    phone: 'Téléphone',
    joinDate: 'Date d\'entrée',
    employeeId: 'Matricule',
    close: 'Fermer'
  },

  // Tasks Modal
  tasks: {
    title: 'Mes tâches',
    taskTitle: 'Titre de la tâche',
    taskTitlePlaceholder: 'Saisir le titre de la tâche...',
    priority: 'Priorité',
    dueDate: 'Échéance',
    addTask: 'Ajouter une tâche',
    noTasks: 'Aucune tâche. Ajoutez votre première tâche ci-dessus !'
  },

  // Language
  language: {
    english: 'English',
    japanese: 'Japonais',
    french: 'Français',
    selectLanguage: 'Choisir la langue'
  },

  // Common
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    noData: 'Aucune donnée disponible',
    viewDetails: 'Voir les détails',
    close: 'Fermer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    search: 'Rechercher',
    filter: 'Filtrer',
    export: 'Exporter',
    items: 'article(s)'
  },

  // Product Names (kept in English as international product codes)
  productNames: {},

  // Customer Names (kept in English as registered company names)
  customerNames: {}
}

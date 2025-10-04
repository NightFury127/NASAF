// ====================================
// EXOPEDIA - AI-POWERED EXOPLANET DETECTION PLATFORM
// Main JavaScript Application Logic with Comprehensive Comments
// ====================================

// Wait for DOM to be fully loaded before initializing the application
document.addEventListener("DOMContentLoaded", function () {
  // ====================================
  // APPLICATION STATE MANAGEMENT
  // Central state object to manage all application data
  // API Integration Point: Replace with Redux/MobX or connect to state management API
  // ====================================
  const state = {
    currentView: "landing", // Current active view/page
    uploadedData: null, // File data from user uploads - connect to file processing API
    manualInput: null, // Manual parameter input data - validate with astronomical databases
    analysisResults: null, // AI analysis results - connect to ML/AI service API
    searchHistory: [], // User search/activity history - connect to user analytics API
    currentAnalysis: null, // Currently running analysis - connect to real-time analysis API
    similarityResults: [], // Planet similarity comparison results - connect to similarity engine API
    explorerFilters: {
      // 3D explorer filter settings
      distance: 1500,
      size: "all",
      habitability: "all",
      mission: "all",
    },
    currentTutorialStep: 0, // Tutorial progress tracking
  };

  // ====================================
  // STATIC APPLICATION DATA
  // Sample data structure - replace with API endpoints in production
  // API Integration Points: Connect each data section to corresponding microservices
  // ====================================
  const appData = {
    // Project information - connect to CMS or content management API
    projectDescription: {
      title: "AI-Powered Exoplanet Detection & Discovery Platform",
      description:
        "EXOPEDIA leverages cutting-edge machine learning algorithms to analyze astronomical data and identify potential exoplanets with unprecedented accuracy. Our platform combines NASA's latest datasets with advanced AI models to accelerate the discovery of worlds beyond our solar system.",
      keyFeatures: [
        "99.8% accuracy using ensemble AI models",
        "Real-time analysis of transit photometry data",
        "Comprehensive exoplanet database with 5,000+ confirmed planets",
        "Professional-grade research tools for astronomers",
        "Educational resources for space science enthusiasts",
      ],
    },

    // Tutorial system data - connect to learning management system API
    gettingStartedGuide: {
      steps: [
        {
          step: 1,
          title: "Upload Your Data",
          description:
            "Drag and drop CSV files containing light curve data or use our manual parameter input for direct analysis.",
        },
        {
          step: 2,
          title: "AI Analysis",
          description:
            "Our ensemble AI model analyzes your data using Random Forest, CNN, and advanced algorithms with 99.6% accuracy.",
        },
        {
          step: 3,
          title: "Review Results",
          description:
            "Get detailed classification results with confidence scores, deciding factors, and scientific explanations.",
        },
        {
          step: 4,
          title: "Explore & Compare",
          description:
            "Use our database to find similar exoplanets, explore the 3D visualization, and export your findings.",
        },
      ],
    },

    // Latest discoveries data - connect to real-time discovery feed API
    // API Integration Point: Replace with live data from astronomical databases
    latestDiscoveries: [
      {
        id: "EXOP-2025-0847",
        name: "Candidate EXOP-847",
        classification: "CONFIRMED",
        confidence: 98.7,
        discoveryDate: "2025-10-04T14:32:00Z",
        parameters: {
          radius: "1.4 Earth radii",
          period: "23.7 days",
          distance: "387 light-years",
        },
      },
      {
        id: "EXOP-2025-0846",
        name: "Candidate EXOP-846",
        classification: "CANDIDATE",
        confidence: 84.2,
        discoveryDate: "2025-10-04T13:18:00Z",
        parameters: {
          radius: "0.89 Earth radii",
          period: "15.2 days",
          distance: "156 light-years",
        },
      },
      {
        id: "EXOP-2025-0845",
        name: "Analysis EXOP-845",
        classification: "FALSE_POSITIVE",
        confidence: 92.1,
        discoveryDate: "2025-10-04T12:05:00Z",
        parameters: {
          radius: "2.8 Earth radii",
          period: "4.1 days",
          distance: "89 light-years",
        },
      },
    ],

    // Platform statistics - connect to real-time analytics API
    // API Integration Point: Replace with live metrics from monitoring services
    categoryStatistics: {
      confirmed: {
        count: 2847,
        accuracy: 99.2,
        recentDiscoveries: [
          {
            name: "EXOP-847",
            confidence: 98.7,
            date: "2025-10-04T14:32:00Z",
            parameters: "1.4 R⊕, 23.7d period",
          },
          {
            name: "EXOP-843",
            confidence: 97.9,
            date: "2025-10-04T11:22:00Z",
            parameters: "1.1 R⊕, 45.2d period",
          },
        ],
      },
      candidates: {
        count: 1205,
        accuracy: 78.4,
        recentDiscoveries: [
          {
            name: "EXOP-846",
            confidence: 84.2,
            date: "2025-10-04T13:18:00Z",
            parameters: "0.89 R⊕, 15.2d period",
          },
          {
            name: "EXOP-844",
            confidence: 81.7,
            date: "2025-10-04T10:45:00Z",
            parameters: "1.6 R⊕, 67.8d period",
          },
        ],
      },
      false_positives: {
        count: 14440,
        accuracy: 95.8,
        recentDiscoveries: [
          {
            name: "EXOP-845",
            confidence: 92.1,
            date: "2025-10-04T12:05:00Z",
            parameters: "2.8 R⊕, 4.1d period",
          },
          {
            name: "EXOP-842",
            confidence: 94.3,
            date: "2025-10-04T09:30:00Z",
            parameters: "3.2 R⊕, 2.9d period",
          },
        ],
      },
    },

    // AI analysis parameters - connect to ML model configuration API
    analysisParameters: [
      {
        name: "Orbital Period",
        importance: 0.24,
        description: "Consistency of transit timing",
      },
      {
        name: "Transit Depth",
        importance: 0.28,
        description: "Amount of stellar light blocked",
      },
      {
        name: "Transit Duration",
        importance: 0.19,
        description: "Length of transit event",
      },
      {
        name: "Signal-to-Noise Ratio",
        importance: 0.18,
        description: "Strength of signal above noise",
      },
      {
        name: "Stellar Properties",
        importance: 0.11,
        description: "Host star characteristics",
      },
    ],

    // Platform performance metrics - connect to system monitoring API
    platformStats: {
      confirmed_exoplanets: 2847,
      candidate_exoplanets: 1205,
      false_positives: 14440,
      total_analyses: 18492,
      average_accuracy: 98.4,
      success_rate: 94.7,
      active_researchers: 1247,
      processing_speed: "847 analyses/hour",
      uptime: "99.97%",
    },

    // Exoplanet database - connect to astronomical database API (NASA Exoplanet Archive, etc.)
    // API Integration Point: Replace with live database queries
    exoplanetDatabase: [
      {
        id: "KEP-452b",
        name: "Kepler-452b",
        classification: "CONFIRMED",
        discovery_date: "2015-07-23",
        distance_ly: 1402,
        radius_earth: 1.6,
        orbital_period_days: 385.0,
        stellar_temp_k: 5757,
        transit_depth_ppm: 115,
        habitability_score: 8.2,
        similarity_match: 0.94,
        discovery_mission: "Kepler",
      },
      {
        id: "TRAPPIST-1e",
        name: "TRAPPIST-1e",
        classification: "CONFIRMED",
        discovery_date: "2016-05-02",
        distance_ly: 40.0,
        radius_earth: 0.92,
        orbital_period_days: 6.1,
        stellar_temp_k: 2559,
        transit_depth_ppm: 89,
        habitability_score: 9.1,
        similarity_match: 0.87,
        discovery_mission: "TRAPPIST",
      },
      {
        id: "TOI-715b",
        name: "TOI-715 b",
        classification: "CANDIDATE",
        discovery_date: "2024-01-31",
        distance_ly: 137,
        radius_earth: 1.55,
        orbital_period_days: 19.3,
        stellar_temp_k: 3600,
        transit_depth_ppm: 203,
        habitability_score: 6.9,
        similarity_match: 0.79,
        discovery_mission: "TESS",
      },
      {
        id: "K2-18b",
        name: "K2-18 b",
        classification: "CONFIRMED",
        discovery_date: "2015-12-15",
        distance_ly: 124,
        radius_earth: 2.3,
        orbital_period_days: 33.0,
        stellar_temp_k: 3457,
        transit_depth_ppm: 156,
        habitability_score: 8.7,
        similarity_match: 0.83,
        discovery_mission: "K2",
      },
      {
        id: "LHS-1140b",
        name: "LHS 1140 b",
        classification: "CONFIRMED",
        discovery_date: "2017-04-19",
        distance_ly: 40.7,
        radius_earth: 1.4,
        orbital_period_days: 24.7,
        stellar_temp_k: 3216,
        transit_depth_ppm: 178,
        habitability_score: 7.8,
        similarity_match: 0.91,
        discovery_mission: "K2",
      },
    ],

    // Detection factors for explainable AI - connect to ML explanation API
    detectionFactors: [
      {
        name: "Transit Depth Consistency",
        importance: 0.28,
        description:
          "Measures consistency of light dimming across multiple transits",
        scientific_basis:
          "Planetary transits show consistent depth while stellar activity varies",
      },
      {
        name: "Orbital Period Stability",
        importance: 0.24,
        description: "Evaluates regularity of transit timing intervals",
        scientific_basis:
          "Planets maintain stable orbits while stellar phenomena are irregular",
      },
      {
        name: "Signal-to-Noise Ratio",
        importance: 0.19,
        description: "Assesses signal strength above background noise level",
        scientific_basis:
          "Strong, clear signals indicate genuine astrophysical phenomena",
      },
      {
        name: "Stellar Activity Assessment",
        importance: 0.16,
        description: "Rules out stellar variability as the signal source",
        scientific_basis:
          "Stellar activity patterns differ from planetary transit signatures",
      },
      {
        name: "Multi-Transit Detection",
        importance: 0.13,
        description:
          "Confirms multiple transit events with consistent parameters",
        scientific_basis:
          "Multiple consistent transits strongly support planetary hypothesis",
      },
    ],
  };

  // ====================================
  // DOM ELEMENT REFERENCES
  // Cache all DOM elements for performance and easy access
  // ====================================
  const elements = {
    // Loading and navigation elements
    loadingScreen: document.getElementById("loadingScreen"),
    navLinks: document.querySelectorAll(".nav-link"),
    views: document.querySelectorAll(".view"),
    mobileMenuToggle: document.getElementById("mobileMenuToggle"),

    // Landing page elements
    statNumbers: document.querySelectorAll(".stat-number"),
    exploreBtns: document.querySelectorAll(".explore-btn"),
    getStartedBtn: document.getElementById("getStartedBtn"),
    discoveryTimeline: document.getElementById("discoveryTimeline"),

    // Detection interface elements
    uploadZone: document.getElementById("uploadZone"),
    fileInput: document.getElementById("fileInput"),
    openManualInput: document.getElementById("openManualInput"),
    uploadProgress: document.getElementById("uploadProgress"),
    analyzeBtn: document.getElementById("analyzeBtn"),
    analysisProgress: document.getElementById("analysisProgress"),
    analysisStatus: document.getElementById("analysisStatus"),
    analysisDetails: document.getElementById("analysisDetails"),

    // Results display elements
    classificationResult: document.getElementById("classificationResult"),
    accuracyDisplay: document.getElementById("accuracyDisplay"),
    parametersSection: document.getElementById("parametersSection"),
    datasetInfo: document.getElementById("datasetInfo"),
    errorDisclaimer: document.getElementById("errorDisclaimer"),
    factorsList: document.getElementById("factorsList"),
    similarPlanetsList: document.getElementById("similarPlanetsList"),
    exportResults: document.getElementById("exportResults"),
    shareResults: document.getElementById("shareResults"),
    exploreSimilar: document.getElementById("exploreSimilar"),

    // Dashboard elements
    dashboardStats: document.querySelectorAll(".dashboard-card .stat-value"),
    clickableStats: document.querySelectorAll(".clickable-stat"),
    refreshStats: document.getElementById("refreshStats"),
    planetSearchInput: document.getElementById("planetSearchInput"),
    searchBtn: document.getElementById("searchBtn"),
    classificationFilter: document.getElementById("classificationFilter"),
    advancedFilterBtn: document.getElementById("advancedFilterBtn"),
    autoCompleteBtn: document.getElementById("autoCompleteBtn"),
    searchResults: document.getElementById("searchResults"),
    historyList: document.getElementById("historyList"),
    historyFilter: document.getElementById("historyFilter"),
    exportHistory: document.getElementById("exportHistory"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn"),
    openSimilarityFinder: document.getElementById("openSimilarityFinder"),
    batchCompare: document.getElementById("batchCompare"),
    quickFilterBtns: document.querySelectorAll(".quick-filter-btn"),
    similarityResults: document.getElementById("similarityResults"),

    // 3D Explorer elements
    distanceSlider: document.getElementById("distanceSlider"),
    distanceDisplay: document.getElementById("distanceDisplay"),
    sizeFilter: document.getElementById("sizeFilter"),
    habitabilityFilter: document.getElementById("habitabilityFilter"),
    missionFilter: document.getElementById("missionFilter"),
    resetView: document.getElementById("resetView"),
    animateOrbit: document.getElementById("animateOrbit"),
    showLabels: document.getElementById("showLabels"),
    zoomIn: document.getElementById("zoomIn"),
    zoomOut: document.getElementById("zoomOut"),
    fullscreen: document.getElementById("fullscreen"),
    planetSystem: document.getElementById("planetSystem"),
    sceneInfo: document.getElementById("sceneInfo"),
    visiblePlanets: document.getElementById("visiblePlanets"),
    avgDistance: document.getElementById("avgDistance"),

    // History page elements
    historyTimeline: document.getElementById("historyTimeline"),
    historyTypeFilter: document.getElementById("historyTypeFilter"),
    historyDateFilter: document.getElementById("historyDateFilter"),
    clearAllHistory: document.getElementById("clearAllHistory"),

    // Modal elements
    manualInputModal: document.getElementById("manualInputModal"),
    closeManualInput: document.getElementById("closeManualInput"),
    cancelManualInput: document.getElementById("cancelManualInput"),
    manualInputForm: document.getElementById("manualInputForm"),

    tutorialModal: document.getElementById("tutorialModal"),
    closeTutorial: document.getElementById("closeTutorial"),
    tutorialContent: document.getElementById("tutorialContent"),
    prevStep: document.getElementById("prevStep"),
    nextStep: document.getElementById("nextStep"),
    stepIndicator: document.getElementById("stepIndicator"),

    categoryModal: document.getElementById("categoryModal"),
    closeCategoryModal: document.getElementById("closeCategoryModal"),
    categoryTitle: document.getElementById("categoryTitle"),
    categoryDetails: document.getElementById("categoryDetails"),

    similarityModal: document.getElementById("similarityModal"),
    closeSimilarityModal: document.getElementById("closeSimilarityModal"),
    cancelSimilarity: document.getElementById("cancelSimilarity"),
    similarityForm: document.getElementById("similarityForm"),
    similarityResultsModal: document.getElementById("similarityResultsModal"),

    advancedFiltersModal: document.getElementById("advancedFiltersModal"),
    closeAdvancedFilters: document.getElementById("closeAdvancedFilters"),
    advancedFiltersForm: document.getElementById("advancedFiltersForm"),
    resetFilters: document.getElementById("resetFilters"),
  };

  // ====================================
  // APPLICATION INITIALIZATION
  // Main initialization function that sets up all components
  // ====================================
  init();

  function init() {
    // Show loading screen during initialization
    showLoadingScreen();

    // Initialize all application modules
    initNavigation(); // Set up navigation system
    initLandingPage(); // Initialize homepage
    initDetectionInterface(); // Set up AI detection tools
    initResultsInterface(); // Initialize results display
    initDashboard(); // Set up analytics dashboard
    initExplorer(); // Initialize 3D explorer
    initDocumentation(); // Set up documentation
    initHistoryPage(); // Initialize history tracking
    initModals(); // Set up modal system
    initMobileMenu(); // Initialize mobile navigation

    // Hide loading screen and show main application
    setTimeout(() => {
      hideLoadingScreen();
      // Handle URL hash routing on initial load
      if (window.location.hash) {
        const view = window.location.hash.substring(1);
        if (view && document.getElementById(view + "View")) {
          switchView(view);
        }
      }
    }, 2500);
  }

  // ====================================
  // LOADING SCREEN MANAGEMENT
  // Functions to control the application loading state
  // ====================================

  function showLoadingScreen() {
    // Display loading screen - can be enhanced with progress tracking
    elements.loadingScreen.classList.remove("hidden");
  }

  function hideLoadingScreen() {
    // Hide loading screen when app is ready
    elements.loadingScreen.classList.add("hidden");
  }

  // ====================================
  // NAVIGATION SYSTEM
  // Single Page Application routing and navigation management
  // API Integration Point: Connect to routing/analytics API for navigation tracking
  // ====================================

  function initNavigation() {
    // Set up navigation event listeners
    elements.navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });
  }

  function handleNavClick(e) {
    // Handle navigation link clicks
    e.preventDefault();
    const targetView = e.currentTarget.getAttribute("data-view");
    switchView(targetView);

    // API Integration Point: Track navigation events
    // trackNavigationEvent(targetView, 'nav_click');
  }

  function switchView(targetView) {
    // Switch between different application views/pages
    if (state.currentView === targetView) return;

    // Update navigation active state
    elements.navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-view") === targetView
      );
    });

    // Switch views with smooth transitions
    elements.views.forEach((view) => {
      view.classList.toggle("active", view.id === targetView + "View");
    });

    state.currentView = targetView;
    // Ensure the document is scrolled to top when navigating so the new
    // view's content isn't hidden under the fixed navbar or left scrolled
    // from the previous view's position.
    try {
      // Immediate reset
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Blur any focused element to avoid focus-triggered scroll
      if (
        document.activeElement &&
        typeof document.activeElement.blur === "function"
      ) {
        document.activeElement.blur();
      }

      // Repeat the scroll reset after a short delay to handle race conditions
      setTimeout(() => {
        try {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (e) {
          /* ignore */
        }
      }, 50);
    } catch (err) {
      // fallback for very old browsers
      window.scrollTo(0, 0);
    }

    // Initialize view-specific content when activated
    if (targetView === "dashboard") {
      animateCounters(); // Animate statistics counters
    } else if (targetView === "explorer") {
      setTimeout(() => renderExplorerPlanets(), 100); // Render 3D planets
    } else if (targetView === "history") {
      updateHistoryTimeline(); // Update history display
    }

    // Update browser URL for bookmarking
    history.pushState(null, null, "#" + targetView);

    // API Integration Point: Track page views
    // trackPageView(targetView);
  }

  // ====================================
  // LANDING PAGE FUNCTIONALITY
  // Homepage with project overview and getting started features
  // ====================================

  function initLandingPage() {
    // Initialize homepage components
    renderLatestDiscoveries(); // Display recent discoveries

    // Set up Get Started button - opens tutorial
    if (elements.getStartedBtn) {
      elements.getStartedBtn.addEventListener("click", () => {
        openModal("tutorialModal");
        initTutorial();
      });
    }

    // Animate statistics counters on page load
    setTimeout(() => {
      animateCounters();
    }, 1000);

    // Handle explore buttons - navigate to main features
    elements.exploreBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetView = e.currentTarget.getAttribute("data-view");
        switchView(targetView);
      });
    });
  }

  function renderLatestDiscoveries() {
    // Render latest discovery timeline on homepage
    // API Integration Point: Replace with real-time discovery feed
    // fetchLatestDiscoveries().then(discoveries => { ... })

    if (!elements.discoveryTimeline) return;

    const html = appData.latestDiscoveries
      .map((discovery) => {
        const date = new Date(discovery.discoveryDate);
        const timeStr = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const dateStr = date.toLocaleDateString();

        return `
                <div class="timeline-item">
                    <div class="timeline-date">${dateStr} ${timeStr}</div>
                    <div class="timeline-content">
                        <div class="timeline-title">${discovery.name}</div>
                        <div class="timeline-details">${
                          discovery.parameters.radius
                        }, ${discovery.parameters.period}, ${
          discovery.parameters.distance
        }</div>
                    </div>
                    <div class="timeline-confidence confidence-${discovery.classification
                      .toLowerCase()
                      .replace("_", "-")}">
                        ${Math.round(discovery.confidence)}%
                    </div>
                </div>
            `;
      })
      .join("");

    elements.discoveryTimeline.innerHTML = html;
  }

  function animateCounters() {
    // Animate statistics counters with smooth counting effect
    // Used on landing page and dashboard for visual appeal

    elements.statNumbers.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const animate = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(animate);
        } else {
          counter.textContent = target;
        }
      };

      animate();
    });

    // Animate dashboard statistics as well
    if (elements.dashboardStats) {
      elements.dashboardStats.forEach((stat) => {
        const target = parseFloat(stat.getAttribute("data-target"));
        if (target) {
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const animate = () => {
            current += step;
            if (current < target) {
              stat.textContent = Math.floor(current);
              requestAnimationFrame(animate);
            } else {
              stat.textContent = target;
            }
          };

          animate();
        }
      });
    }
  }

  // ====================================
  // DETECTION INTERFACE
  // AI-powered exoplanet detection tools and file processing
  // API Integration Points: File processing, parameter validation, AI analysis
  // ====================================

  function initDetectionInterface() {
    // Initialize file upload functionality
    if (elements.uploadZone && elements.fileInput) {
      // File upload event listeners
      elements.uploadZone.addEventListener("click", () =>
        elements.fileInput.click()
      );
      elements.uploadZone.addEventListener("dragover", handleDragOver);
      elements.uploadZone.addEventListener("dragleave", handleDragLeave);
      elements.uploadZone.addEventListener("drop", handleFileDrop);

      // Hover effects for upload zone
      elements.uploadZone.addEventListener("mouseenter", () => {
        elements.uploadZone.classList.add("expanded");
      });
      elements.uploadZone.addEventListener("mouseleave", () => {
        if (!elements.uploadZone.classList.contains("dragover")) {
          elements.uploadZone.classList.remove("expanded");
        }
      });

      elements.fileInput.addEventListener("change", handleFileSelect);
    }

    // Manual parameter input button
    if (elements.openManualInput) {
      elements.openManualInput.addEventListener("click", () => {
        openModal("manualInputModal");
      });
    }

    // AI analysis execution button
    if (elements.analyzeBtn) {
      elements.analyzeBtn.addEventListener("click", startAnalysis);
    }

    updateAnalyzeButton(); // Update button state based on available data
  }

  // File drag and drop handlers
  function handleDragOver(e) {
    e.preventDefault();
    elements.uploadZone.classList.add("dragover", "expanded");
  }

  function handleDragLeave(e) {
    e.preventDefault();
    elements.uploadZone.classList.remove("dragover");
    setTimeout(() => {
      if (!elements.uploadZone.matches(":hover")) {
        elements.uploadZone.classList.remove("expanded");
      }
    }, 100);
  }

  function handleFileDrop(e) {
    e.preventDefault();
    elements.uploadZone.classList.remove("dragover", "expanded");
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  }

  function handleFileSelect(e) {
    // Handle file selection from input dialog
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  }

  function processFile(file) {
    // Process uploaded file and validate format
    // API Integration Point: Connect to file processing microservice
    // validateFileFormat(file).then(isValid => { ... })

    const allowedTypes = [".csv", ".fits"];
    const fileExtension = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedTypes.includes(fileExtension)) {
      alert("Please upload a CSV or FITS file.");
      return;
    }

    state.uploadedData = file;
    simulateUpload(); // Replace with actual file upload API call

    // API Integration Point: Upload file to processing service
    // uploadFileToProcessingService(file).then(response => { ... })
  }

  function simulateUpload() {
    // Simulate file upload with progress bar
    // Replace with actual upload progress tracking

    const progressBar = elements.uploadProgress.querySelector(".progress-fill");
    const progressText =
      elements.uploadProgress.querySelector(".progress-text");

    elements.uploadProgress.classList.remove("hidden");

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          elements.uploadProgress.classList.add("hidden");
          updateAnalyzeButton();
        }, 500);
      }

      progressBar.style.width = progress + "%";
      progressText.textContent = Math.round(progress) + "%";
    }, 200);

    // API Integration Point: Track upload progress
    // trackUploadProgress(file.name, progress);
  }

  function updateAnalyzeButton() {
    // Update analysis button state based on available data
    const hasData = state.uploadedData || state.manualInput;
    elements.analyzeBtn.disabled = !hasData;

    if (hasData) {
      elements.analysisStatus.textContent =
        "Ready for analysis with Hybrid Ensemble Classifier";
      elements.analysisDetails.classList.remove("hidden");
    } else {
      elements.analysisStatus.textContent =
        "Upload data or enter manual parameters to begin analysis";
      elements.analysisDetails.classList.add("hidden");
    }
  }

  function startAnalysis() {
    // Execute AI analysis on uploaded data or manual parameters
    // API Integration Point: Connect to ML/AI analysis microservice
    // analyzeWithAI(data).then(results => { ... })

    if (!state.uploadedData && !state.manualInput) return;

    // Show analysis progress
    elements.analysisProgress.classList.remove("hidden");
    const progressBar =
      elements.analysisProgress.querySelector(".progress-fill");
    const progressText =
      elements.analysisProgress.querySelector(".progress-text");

    elements.analyzeBtn.disabled = true;

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Complete analysis simulation
        setTimeout(() => {
          const results = simulateAIAnalysis(); // Replace with actual AI API call
          state.analysisResults = results;

          elements.analysisProgress.classList.add("hidden");
          elements.analyzeBtn.disabled = false;

          // Navigate to results page
          switchView("results");

          // Display results with animation delay
          setTimeout(() => {
            displayAnalysisResults(results);
          }, 500);
        }, 500);
      }

      progressBar.style.width = progress + "%";
      progressText.textContent = "Analyzing... " + Math.round(progress) + "%";
    }, 150);

    // Add analysis to user history
    addToHistory({
      type: "analysis",
      timestamp: new Date(),
      data_source: state.uploadedData ? "file_upload" : "manual_input",
      status: "in_progress",
    });

    // API Integration Point: Submit analysis job to AI service
    // submitAnalysisJob(analysisData).then(jobId => { ... })
  }

  function simulateAIAnalysis() {
    // Simulate AI analysis results
    // API Integration Point: Replace with actual AI/ML service call
    // const results = await callAIAnalysisAPI(inputData);

    const baseAccuracy = 98.5;
    const accuracy = baseAccuracy - Math.random() * 2;

    // Determine classification based on accuracy and random factors
    let classification, confidence;
    const randomFactor = Math.random();

    if (accuracy > 96 && randomFactor > 0.3) {
      classification = "confirmed";
      confidence = accuracy;
    } else if (accuracy > 93 || (accuracy > 90 && randomFactor > 0.5)) {
      classification = "candidate";
      confidence = accuracy * 0.9;
    } else {
      classification = "false-positive";
      confidence = accuracy * 0.8;
    }

    // Simulate insufficient data detection
    const hasInsufficientData = Math.random() < 0.2; // 20% chance

    return {
      classification: classification,
      confidence: confidence,
      keyFactors: appData.detectionFactors.map((factor) => ({
        ...factor,
        score: Math.random() * 0.3 + 0.7,
      })),
      parameters: generateAnalysisParameters(),
      dataset: getDatasetInfo(),
      similarPlanets: findSimilarPlanets(),
      timestamp: new Date(),
      processingTime: (Math.random() * 2 + 1).toFixed(1),
      hasInsufficientData: hasInsufficientData,
    };
  }

  function generateAnalysisParameters() {
    // Generate analysis parameters for results display
    // API Integration Point: Get actual parameters from analysis service

    return [
      { name: "Orbital Period", value: "24.7 days", importance: 0.24 },
      { name: "Transit Depth", value: "156 ppm", importance: 0.28 },
      { name: "Transit Duration", value: "3.2 hours", importance: 0.19 },
      { name: "Signal-to-Noise Ratio", value: "8.4", importance: 0.18 },
      { name: "Stellar Temperature", value: "5778 K", importance: 0.11 },
    ];
  }

  function getDatasetInfo() {
    // Get information about datasets used in analysis
    // API Integration Point: Connect to dataset metadata service

    const datasets = [
      {
        name: "Kepler DR25 Catalog",
        description:
          "Comprehensive catalog of Kepler mission transit candidates with validated parameters",
        size: "34,032 targets",
      },
      {
        name: "TESS Input Catalog v8.2",
        description: "Latest TESS mission data with high-precision photometry",
        size: "468,087 targets",
      },
      {
        name: "Gaia DR3 Stellar Parameters",
        description: "Precise stellar characterization from Gaia mission",
        size: "1.8 billion stars",
      },
    ];

    return datasets[Math.floor(Math.random() * datasets.length)];
  }

  function findSimilarPlanets() {
    // Find similar planets for comparison
    // API Integration Point: Connect to similarity computation service
    // const similarPlanets = await findSimilarPlanetsAPI(analysisResults);

    return appData.exoplanetDatabase
      .filter((planet) => planet.classification === "CONFIRMED")
      .slice(0, 3)
      .map((planet) => ({
        ...planet,
        similarity: Math.random() * 0.3 + 0.7,
      }));
  }

  // ====================================
  // RESULTS INTERFACE
  // Display and manage analysis results with export capabilities
  // API Integration Points: Results persistence, sharing, export services
  // ====================================

  function initResultsInterface() {
    // Initialize results page functionality
    if (elements.exportResults) {
      elements.exportResults.addEventListener("click", exportAnalysisResults);
    }
    if (elements.shareResults) {
      elements.shareResults.addEventListener("click", shareResults);
    }
    if (elements.exploreSimilar) {
      elements.exploreSimilar.addEventListener("click", exploreSimilarPlanets);
    }

    // New analysis buttons
    document.querySelectorAll(".new-analysis-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetView = e.currentTarget.getAttribute("data-view");
        switchView(targetView);
      });
    });
  }

  function displayAnalysisResults(results) {
    // Display comprehensive analysis results
    // API Integration Point: Log result views for analytics
    // logResultsView(results.id, results.classification);

    displayClassification(results); // Show classification result
    displayAccuracy(results); // Show confidence circle
    displayAnalysisParameters(results); // Show parameters used
    displayDatasetInfo(results); // Show dataset information
    displayKeyFactors(results); // Show deciding factors
    displaySimilarPlanets(results); // Show similar planets

    // Show data quality warning if needed
    if (results.hasInsufficientData) {
      elements.errorDisclaimer.classList.remove("hidden");
    } else {
      elements.errorDisclaimer.classList.add("hidden");
    }

    enableResultActions(); // Enable export/share buttons

    // Add completed analysis to history
    addToHistory({
      type: "analysis",
      timestamp: results.timestamp,
      classification: results.classification,
      confidence: Math.round(results.confidence),
      processing_time: results.processingTime,
      status: "completed",
    });
  }

  function displayAnalysisParameters(results) {
    // Display analysis parameters and their importance
    const html = `
            <h4>Parameters Analyzed</h4>
            <div class="parameters-list">
                ${results.parameters
                  .map(
                    (param) => `
                    <div class="parameter-item">
                        <div class="parameter-name">${param.name}</div>
                        <div class="parameter-value">${param.value}</div>
                        <div class="parameter-importance">Importance: ${Math.round(
                          param.importance * 100
                        )}%</div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
    elements.parametersSection.innerHTML = html;
  }

  function displayDatasetInfo(results) {
    // Display information about datasets used
    const html = `
            <div class="dataset-title">Dataset Used for Comparison</div>
            <div class="dataset-description">
                <strong>${results.dataset.name}</strong><br>
                ${results.dataset.description}<br>
                <em>Coverage: ${results.dataset.size}</em>
            </div>
        `;
    elements.datasetInfo.innerHTML = html;
  }

  function displayClassification(results) {
    // Display classification result with visual feedback
    const iconCircle =
      elements.classificationResult.querySelector(".icon-circle");
    const label = elements.classificationResult.querySelector(
      ".classification-label"
    );
    const desc = elements.classificationResult.querySelector(
      ".classification-desc"
    );

    iconCircle.className = "icon-circle " + results.classification;

    // Set classification-specific content
    switch (results.classification) {
      case "confirmed":
        iconCircle.textContent = "✓";
        label.textContent = "CONFIRMED EXOPLANET";
        desc.textContent =
          "High confidence detection with strong supporting evidence";
        break;
      case "candidate":
        iconCircle.textContent = "?";
        label.textContent = "CANDIDATE EXOPLANET";
        desc.textContent =
          "Potential exoplanet requiring additional verification and follow-up";
        break;
      case "false-positive":
        iconCircle.textContent = "✗";
        label.textContent = "FALSE POSITIVE DETECTION";
        desc.textContent =
          "Signal likely caused by stellar activity or instrumental systematics";
        break;
    }
  }

  function displayAccuracy(results) {
    // Display accuracy as animated circular progress
    const circle = elements.accuracyDisplay.querySelector(".circle-progress");
    const text = elements.accuracyDisplay.querySelector(".percentage-text");

    const percentage = Math.round(results.confidence);

    // Update circular progress visual
    circle.style.background = `conic-gradient(
            var(--electric-blue) ${percentage * 3.6}deg,
            rgba(255, 255, 255, 0.1) ${percentage * 3.6}deg
        )`;

    // Animate percentage counter
    let current = 0;
    const animate = () => {
      if (current < percentage) {
        current++;
        text.textContent = current + "%";
        requestAnimationFrame(animate);
      }
    };
    animate();
  }

  function displayKeyFactors(results) {
    // Display key factors that influenced the AI decision
    const html = results.keyFactors
      .map(
        (factor) => `
            <div class="factor-item">
                <div class="factor-importance">
                    <div class="importance-fill" style="width: ${
                      factor.importance * 100
                    }%"></div>
                </div>
                <div class="factor-content">
                    <h4>${factor.name}</h4>
                    <p>${factor.description}</p>
                </div>
            </div>
        `
      )
      .join("");

    elements.factorsList.innerHTML = html;
  }

  function displaySimilarPlanets(results) {
    // Display similar planets from database
    const html = results.similarPlanets
      .map(
        (planet) => `
            <div class="planet-item" onclick="showPlanetDetails('${
              planet.id
            }')">
                <div class="planet-visual" style="background: linear-gradient(135deg, ${getPlanetColor(
                  planet
                )});"></div>
                <div class="planet-info">
                    <h4>${planet.name}</h4>
                    <div class="planet-details">
                        <span>${planet.distance_ly} ly</span>
                        <span>${planet.radius_earth} R⊕</span>
                        <span>${planet.orbital_period_days} days</span>
                    </div>
                </div>
                <div class="similarity-score">
                    <div class="similarity-percentage">${Math.round(
                      planet.similarity * 100
                    )}%</div>
                    <div class="similarity-label">Similar</div>
                </div>
            </div>
        `
      )
      .join("");

    elements.similarPlanetsList.innerHTML = html;
  }

  function getPlanetColor(planet) {
    // Generate color scheme based on planet characteristics
    if (planet.habitability_score > 8) {
      return "#00FF88, #1FB8CD"; // High habitability - green/blue
    } else if (planet.habitability_score > 6) {
      return "#FFC185, #1FB8CD"; // Medium habitability - orange/blue
    } else {
      return "#B4413C, #944454"; // Low habitability - red/brown
    }
  }

  function enableResultActions() {
    // Enable result action buttons after analysis completion
    elements.exportResults.disabled = false;
    elements.shareResults.disabled = false;
    elements.exploreSimilar.disabled = false;
  }

  function exportAnalysisResults() {
    // Export analysis results to JSON file
    // API Integration Point: Connect to export service with different formats
    // exportToFormat(results, 'json').then(exportUrl => { ... })

    if (!state.analysisResults) return;

    const results = state.analysisResults;
    const exportData = {
      timestamp: results.timestamp.toISOString(),
      classification: results.classification,
      confidence: results.confidence,
      parameters: results.parameters,
      dataset: results.dataset,
      key_factors: results.keyFactors,
      similar_planets: results.similarPlanets,
      processing_time: results.processingTime,
    };

    // Create and download file
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `exopedia_analysis_${Date.now()}.json`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    alert("Analysis results exported successfully!");

    // Track export in history
    addToHistory({
      type: "export",
      timestamp: new Date(),
      description: "Analysis results exported to JSON",
      status: "completed",
    });

    // API Integration Point: Track export events
    // trackExportEvent('json', results.classification);
  }

  function shareResults() {
    // Share analysis results via Web Share API or clipboard
    // API Integration Point: Connect to social sharing service

    if (!state.analysisResults) return;

    const results = state.analysisResults;
    const shareText = `🚀 EXOPEDIA Analysis Result: ${results.classification.toUpperCase()} with ${Math.round(
      results.confidence
    )}% confidence. Discover more at EXOPEDIA! #ExoplanetDetection #AI #SpaceScience`;

    // Use Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: "EXOPEDIA Analysis Result",
        text: shareText,
        url: window.location.href,
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert("Results copied to clipboard!");
      });
    }
  }

  function exploreSimilarPlanets() {
    // Navigate to 3D explorer and highlight similar planets
    if (
      state.analysisResults &&
      state.analysisResults.similarPlanets.length > 0
    ) {
      switchView("explorer");
      setTimeout(() => {
        highlightSimilarPlanetsInExplorer(state.analysisResults.similarPlanets);
      }, 500);
    }
  }

  function highlightSimilarPlanetsInExplorer(similarPlanets) {
    // Highlight similar planets in the 3D explorer
    const planetElements = document.querySelectorAll(".explorer-planet");
    planetElements.forEach((planetEl) => {
      const planetId = planetEl.dataset.planetId;
      const isSimilar = similarPlanets.some((planet) => planet.id === planetId);

      if (isSimilar) {
        planetEl.style.boxShadow = "0 0 30px rgba(0, 255, 136, 0.8)";
        planetEl.style.transform = "scale(1.2)";
      }
    });
  }

  // ====================================
  // DASHBOARD FUNCTIONALITY
  // Analytics dashboard with search, statistics, and history management
  // API Integration Points: Search API, statistics API, user analytics
  // ====================================

  function initDashboard() {
    // Initialize dashboard components

    // Clickable statistics for detailed views
    elements.clickableStats.forEach((stat) => {
      stat.addEventListener("click", (e) => {
        const category = e.currentTarget.getAttribute("data-category");
        showCategoryDetails(category);
      });
    });

    // Statistics refresh functionality
    if (elements.refreshStats) {
      elements.refreshStats.addEventListener("click", () => {
        animateCounters();
        // Add rotation animation to refresh button
        elements.refreshStats.style.transform = "rotate(360deg)";
        setTimeout(() => {
          elements.refreshStats.style.transform = "rotate(0deg)";
        }, 500);

        // API Integration Point: Refresh live statistics
        // refreshLiveStatistics().then(newStats => { ... })
      });
    }

    // Search functionality setup
    if (elements.searchBtn) {
      elements.searchBtn.addEventListener("click", performSearch);
    }

    if (elements.planetSearchInput) {
      // Enter key support for search
      elements.planetSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          performSearch();
        }
      });

      // Auto-complete functionality
      elements.planetSearchInput.addEventListener("input", handleAutoComplete);
    }

    // Auto-complete toggle
    if (elements.autoCompleteBtn) {
      elements.autoCompleteBtn.addEventListener("click", toggleAutoComplete);
    }

    // Classification filter
    if (elements.classificationFilter) {
      elements.classificationFilter.addEventListener("change", performSearch);
    }

    // Advanced filters
    if (elements.advancedFilterBtn) {
      elements.advancedFilterBtn.addEventListener("click", () => {
        openModal("advancedFiltersModal");
      });
    }

    // History management
    if (elements.historyFilter) {
      elements.historyFilter.addEventListener("change", filterHistory);
    }

    if (elements.exportHistory) {
      elements.exportHistory.addEventListener("click", exportSearchHistory);
    }

    if (elements.clearHistoryBtn) {
      elements.clearHistoryBtn.addEventListener("click", clearHistory);
    }

    // Similarity finder
    if (elements.openSimilarityFinder) {
      elements.openSimilarityFinder.addEventListener("click", () => {
        openModal("similarityModal");
      });
    }

    if (elements.batchCompare) {
      elements.batchCompare.addEventListener("click", performBatchComparison);
    }

    // Quick filter buttons
    elements.quickFilterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.currentTarget.getAttribute("data-filter");
        applyQuickFilter(filter);
      });
    });

    loadHistory(); // Load existing history
  }

  function showCategoryDetails(category) {
    // Show detailed modal for statistics category
    // API Integration Point: Fetch detailed category statistics
    // fetchCategoryDetails(category).then(details => { ... })

    const categoryData = appData.categoryStatistics[category];
    if (!categoryData) return;

    const categoryNames = {
      confirmed: "Confirmed Exoplanets",
      candidates: "Candidate Exoplanets",
      false_positives: "False Positives",
    };

    elements.categoryTitle.textContent = categoryNames[category];

    const html = `
            <div class="category-accuracy">
                <div class="accuracy-label">Overall Accuracy</div>
                <div class="accuracy-value">${categoryData.accuracy}%</div>
            </div>
            <div class="recent-discoveries">
                <h4>Most Recent Discoveries</h4>
                ${categoryData.recentDiscoveries
                  .map(
                    (discovery) => `
                    <div class="recent-discovery-item">
                        <div>
                            <div class="discovery-name">${discovery.name}</div>
                            <div class="discovery-parameters">${
                              discovery.parameters
                            }</div>
                            <div class="discovery-date">${new Date(
                              discovery.date
                            ).toLocaleDateString()}</div>
                        </div>
                        <div class="discovery-confidence">${
                          discovery.confidence
                        }%</div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    elements.categoryDetails.innerHTML = html;
    openModal("categoryModal");
  }

  let autoCompleteEnabled = false;

  function handleAutoComplete(e) {
    // Handle auto-complete suggestions for search
    // API Integration Point: Connect to search suggestion service
    // getSuggestions(query).then(suggestions => { ... })

    if (!autoCompleteEnabled) return;

    const query = e.target.value.toLowerCase();
    if (query.length < 2) return;

    const matches = appData.exoplanetDatabase
      .filter((planet) => planet.name.toLowerCase().includes(query))
      .slice(0, 5);

    if (matches.length > 0) {
      console.log(
        "Autocomplete suggestions:",
        matches.map((p) => p.name)
      );
      // Display suggestions UI here
    }
  }

  function toggleAutoComplete() {
    // Toggle auto-complete functionality
    autoCompleteEnabled = !autoCompleteEnabled;
    elements.autoCompleteBtn.textContent = autoCompleteEnabled
      ? "✓ Auto-Complete"
      : "Auto-Complete";
    elements.autoCompleteBtn.style.background = autoCompleteEnabled
      ? "rgba(0, 255, 136, 0.1)"
      : "var(--glass-bg)";
  }

  function performSearch() {
    // Perform database search with current filters
    // API Integration Point: Connect to Elasticsearch or database search API
    // searchDatabase(query, filters).then(results => { ... })

    const query = elements.planetSearchInput.value.toLowerCase();
    const classFilter = elements.classificationFilter.value;

    let results = appData.exoplanetDatabase;

    // Apply text search filter
    if (query) {
      results = results.filter(
        (planet) =>
          planet.name.toLowerCase().includes(query) ||
          planet.discovery_mission.toLowerCase().includes(query) ||
          planet.id.toLowerCase().includes(query)
      );
    }

    // Apply classification filter
    if (classFilter) {
      results = results.filter(
        (planet) => planet.classification === classFilter
      );
    }

    displaySearchResults(results, query);

    // Add search to history if there was a query
    if (query) {
      addToHistory({
        type: "search",
        timestamp: new Date(),
        query: query,
        results: results.length,
        status: "completed",
      });
    }

    // API Integration Point: Track search events
    // trackSearchEvent(query, classFilter, results.length);
  }

  function displaySearchResults(results, query) {
    // Display search results in the UI
    if (results.length === 0) {
      elements.searchResults.innerHTML =
        '<div class="search-placeholder">No exoplanets found matching your search criteria. Try different terms or use fewer filters.</div>';
      return;
    }

    const html = results
      .map(
        (planet) => `
            <div class="search-result-item" onclick="showPlanetDetails('${
              planet.id
            }')">
                <div class="result-name">${planet.name}</div>
                <div class="result-details">
                    <span class="status-${planet.classification.toLowerCase()}">${
          planet.classification
        }</span>
                    <span>${planet.distance_ly} ly</span>
                    <span>${planet.radius_earth} R⊕</span>
                    <span>${planet.discovery_mission}</span>
                    <span>Hab: ${planet.habitability_score}/10</span>
                </div>
            </div>
        `
      )
      .join("");

    elements.searchResults.innerHTML = html;
  }

  function applyQuickFilter(filter) {
    // Apply predefined quick filters for common searches
    // API Integration Point: Connect to predefined search templates

    let results = appData.exoplanetDatabase;

    switch (filter) {
      case "earth-like":
        results = results.filter(
          (planet) =>
            planet.radius_earth >= 0.5 &&
            planet.radius_earth <= 2.0 &&
            planet.habitability_score >= 7
        );
        break;
      case "hot-jupiter":
        results = results.filter(
          (planet) =>
            planet.radius_earth >= 8 && planet.orbital_period_days <= 10
        );
        break;
      case "habitable":
        results = results.filter((planet) => planet.habitability_score >= 8);
        break;
    }

    displaySearchResults(results, `Quick Filter: ${filter}`);

    // Add to search history
    addToHistory({
      type: "search",
      timestamp: new Date(),
      query: `Quick Filter: ${filter}`,
      results: results.length,
      status: "completed",
    });
  }

  function performBatchComparison() {
    // Perform batch comparison analysis
    // API Integration Point: Connect to batch processing service
    // performBatchAnalysis(comparisonCriteria).then(results => { ... })

    const comparisonResults = appData.exoplanetDatabase
      .map((planet) => ({
        ...planet,
        comparison_score: Math.random() * 100,
      }))
      .sort((a, b) => b.comparison_score - a.comparison_score);

    elements.similarityResults.innerHTML = `
            <div class="batch-comparison-results">
                <h5>Batch Comparison Complete</h5>
                <p>Analyzed ${
                  comparisonResults.length
                } exoplanets. Top matches:</p>
                ${comparisonResults
                  .slice(0, 3)
                  .map(
                    (planet) => `
                    <div class="comparison-item">
                        <span class="planet-name">${planet.name}</span>
                        <span class="comparison-score">${Math.round(
                          planet.comparison_score
                        )}% match</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }

  // ====================================
  // HISTORY MANAGEMENT
  // User activity tracking and history management
  // API Integration Points: User analytics API, activity logging service
  // ====================================

  function addToHistory(item) {
    // Add new item to user activity history
    // API Integration Point: Connect to user activity logging service
    // logUserActivity(item).then(response => { ... })

    item.id = Date.now();
    state.searchHistory.unshift(item);
    state.searchHistory = state.searchHistory.slice(0, 50); // Keep last 50 items

    updateHistoryDisplay();
    updateHistoryTimeline();
  }

  function updateHistoryDisplay() {
    // Update history display in dashboard
    const filter = elements.historyFilter.value;
    let filteredHistory = state.searchHistory;

    if (filter !== "all") {
      filteredHistory = state.searchHistory.filter(
        (item) => item.type === filter
      );
    }

    if (filteredHistory.length === 0) {
      elements.historyList.innerHTML =
        '<div class="no-history">No history items match the current filter</div>';
      return;
    }

    const html = filteredHistory
      .map(
        (item) => `
            <div class="history-item">
                <div class="result-name">
                    ${
                      item.type === "analysis"
                        ? `🤖 Analysis: ${
                            item.classification
                              ? item.classification.toUpperCase()
                              : "Processing"
                          } ${item.confidence ? `(${item.confidence}%)` : ""}`
                        : item.type === "search"
                        ? `🔍 Search: "${item.query}" (${item.results} results)`
                        : `📊 Export: ${item.description}`
                    }
                </div>
                <div class="result-details">
                    <span>${formatTime(item.timestamp)}</span>
                    ${
                      item.processing_time
                        ? `<span>${item.processing_time}s</span>`
                        : ""
                    }
                    <span class="status-${item.status}">${item.status}</span>
                </div>
            </div>
        `
      )
      .join("");

    elements.historyList.innerHTML = html;
  }

  function filterHistory() {
    // Apply filters to history display
    updateHistoryDisplay();
  }

  function exportSearchHistory() {
    // Export user search history to JSON file
    // API Integration Point: Connect to data export service

    if (state.searchHistory.length === 0) {
      alert("No history to export.");
      return;
    }

    const exportData = {
      export_timestamp: new Date().toISOString(),
      total_items: state.searchHistory.length,
      history: state.searchHistory,
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `exopedia_history_${Date.now()}.json`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    alert("Search history exported successfully!");
  }

  function clearHistory() {
    // Clear user history with confirmation
    // API Integration Point: Connect to user data management service

    if (confirm("Are you sure you want to clear all search history?")) {
      state.searchHistory = [];
      updateHistoryDisplay();
      updateHistoryTimeline();

      // API Integration Point: Clear user history on server
      // clearUserHistoryAPI().then(response => { ... })
    }
  }

  function loadHistory() {
    // Load existing history (placeholder for API integration)
    updateHistoryDisplay();
  }

  function formatTime(date) {
    // Format time for display in history items
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  // ====================================
  // 3D EXPLORER FUNCTIONALITY
  // Interactive 3D visualization of exoplanets
  // API Integration Points: 3D rendering service, planet data API
  // ====================================

  function initExplorer() {
    // Initialize 3D explorer controls and functionality

    // Distance filter slider
    if (elements.distanceSlider) {
      elements.distanceSlider.addEventListener("input", (e) => {
        state.explorerFilters.distance = parseInt(e.target.value);
        elements.distanceDisplay.textContent = e.target.value + " ly";
        filterExplorerPlanets();
      });
    }

    // Size filter dropdown
    if (elements.sizeFilter) {
      elements.sizeFilter.addEventListener("change", (e) => {
        state.explorerFilters.size = e.target.value;
        filterExplorerPlanets();
      });
    }

    // Habitability filter dropdown
    if (elements.habitabilityFilter) {
      elements.habitabilityFilter.addEventListener("change", (e) => {
        state.explorerFilters.habitability = e.target.value;
        filterExplorerPlanets();
      });
    }

    // Mission filter dropdown
    if (elements.missionFilter) {
      elements.missionFilter.addEventListener("change", (e) => {
        state.explorerFilters.mission = e.target.value;
        filterExplorerPlanets();
      });
    }

    // Visualization controls
    if (elements.resetView) {
      elements.resetView.addEventListener("click", resetExplorerView);
    }

    if (elements.animateOrbit) {
      elements.animateOrbit.addEventListener("click", toggleOrbitAnimation);
    }

    if (elements.showLabels) {
      elements.showLabels.addEventListener("click", togglePlanetLabels);
    }

    // Scene controls
    if (elements.zoomIn) {
      elements.zoomIn.addEventListener("click", () => zoomExplorer(1.2));
    }

    if (elements.zoomOut) {
      elements.zoomOut.addEventListener("click", () => zoomExplorer(0.8));
    }

    if (elements.fullscreen) {
      elements.fullscreen.addEventListener("click", toggleFullscreen);
    }
  }

  function renderExplorerPlanets() {
    // Render planets in 3D space
    // API Integration Point: Connect to 3D rendering engine/WebGL service
    // render3DPlanets(planetData).then(scene => { ... })

    if (!elements.planetSystem) return;

    elements.planetSystem.innerHTML = "";

    appData.exoplanetDatabase.forEach((planet, index) => {
      createExplorerPlanet(planet, index);
    });

    filterExplorerPlanets();
  }

  function createExplorerPlanet(planet, index) {
    // Create individual planet element for 3D visualization
    const planetEl = document.createElement("div");
    planetEl.className = "explorer-planet";
    planetEl.dataset.planetId = planet.id;

    // Calculate position based on planet characteristics
    const angle = (index / appData.exoplanetDatabase.length) * 2 * Math.PI;
    const radius = 150 + planet.distance_ly / 10;
    const x = Math.cos(angle) * radius + 300;
    const y = Math.sin(angle) * radius + 300;
    const size = Math.max(20, Math.min(60, planet.radius_earth * 20));

    const colors = getPlanetColor(planet);
    planetEl.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x - size / 2}px;
            top: ${y - size / 2}px;
            background: linear-gradient(135deg, ${colors});
            animation: gentle-float ${3 + index * 0.5}s ease-in-out infinite;
        `;

    planetEl.addEventListener("click", () => selectExplorerPlanet(planet));
    planetEl.title = planet.name;

    elements.planetSystem.appendChild(planetEl);
  }

  function selectExplorerPlanet(planet) {
    // Handle planet selection in 3D explorer
    // API Integration Point: Log planet interaction events
    // logPlanetInteraction(planet.id, 'selected');

    const html = `
            <div class="info-panel">
                <h4>${planet.name} (${planet.id})</h4>
                <div class="planet-stats">
                    <div class="stat-row">
                        <span class="label">Classification:</span> 
                        <span class="value status-${planet.classification.toLowerCase()}">${
      planet.classification
    }</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Distance:</span> 
                        <span class="value">${
                          planet.distance_ly
                        } light-years</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Radius:</span> 
                        <span class="value">${
                          planet.radius_earth
                        } Earth radii</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Orbital Period:</span> 
                        <span class="value">${
                          planet.orbital_period_days
                        } days</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Host Star Temperature:</span> 
                        <span class="value">${planet.stellar_temp_k} K</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Transit Depth:</span> 
                        <span class="value">${
                          planet.transit_depth_ppm
                        } ppm</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Habitability Score:</span> 
                        <span class="value">${
                          planet.habitability_score
                        }/10</span>
                    </div>
                    <div class="stat-row">
                        <span class="label">Discovery:</span> 
                        <span class="value">${
                          planet.discovery_date.split("-")[0]
                        } (${planet.discovery_mission})</span>
                    </div>
                </div>
                <div class="planet-actions" style="margin-top: 16px;">
                    <button class="btn btn--sm" onclick="comparePlanet('${
                      planet.id
                    }')">Compare</button>
                    <button class="btn btn--sm btn--secondary" onclick="exportPlanetData('${
                      planet.id
                    }')">Export</button>
                </div>
            </div>
        `;

    elements.sceneInfo.innerHTML = html;
  }

  function filterExplorerPlanets() {
    // Apply filters to visible planets in 3D explorer
    const planets = elements.planetSystem.querySelectorAll(".explorer-planet");
    let visibleCount = 0;
    let totalDistance = 0;

    planets.forEach((planetEl, index) => {
      const planet = appData.exoplanetDatabase[index];
      let visible = true;

      // Apply distance filter
      if (planet.distance_ly > state.explorerFilters.distance) visible = false;

      // Apply size filter
      if (state.explorerFilters.size === "small" && planet.radius_earth >= 2)
        visible = false;
      if (state.explorerFilters.size === "large" && planet.radius_earth < 2)
        visible = false;
      if (state.explorerFilters.size === "giant" && planet.radius_earth < 10)
        visible = false;

      // Apply habitability filter
      if (
        state.explorerFilters.habitability === "high" &&
        planet.habitability_score <= 8
      )
        visible = false;
      if (
        state.explorerFilters.habitability === "medium" &&
        (planet.habitability_score <= 5 || planet.habitability_score > 8)
      )
        visible = false;
      if (
        state.explorerFilters.habitability === "low" &&
        planet.habitability_score > 5
      )
        visible = false;

      // Apply mission filter
      if (
        state.explorerFilters.mission !== "all" &&
        planet.discovery_mission !== state.explorerFilters.mission
      )
        visible = false;

      // Update planet visibility
      planetEl.style.opacity = visible ? "1" : "0.2";
      planetEl.style.pointerEvents = visible ? "auto" : "none";
      planetEl.style.transform = visible ? "scale(1)" : "scale(0.7)";

      if (visible) {
        visibleCount++;
        totalDistance += planet.distance_ly;
      }
    });

    // Update statistics display
    elements.visiblePlanets.textContent = visibleCount;
    elements.avgDistance.textContent =
      visibleCount > 0 ? Math.round(totalDistance / visibleCount) : 0;
  }

  let orbitAnimationActive = false;
  let labelsVisible = false;

  function resetExplorerView() {
    // Reset 3D explorer to default view
    state.explorerFilters = {
      distance: 1500,
      size: "all",
      habitability: "all",
      mission: "all",
    };

    // Reset UI controls
    elements.distanceSlider.value = 1500;
    elements.distanceDisplay.textContent = "1500 ly";
    elements.sizeFilter.value = "all";
    elements.habitabilityFilter.value = "all";
    elements.missionFilter.value = "all";

    filterExplorerPlanets();
    elements.planetSystem.style.transform = "translate(-50%, -50%) scale(1)";
  }

  function toggleOrbitAnimation() {
    // Toggle orbital animation for planets
    orbitAnimationActive = !orbitAnimationActive;
    const planets = elements.planetSystem.querySelectorAll(".explorer-planet");

    planets.forEach((planet, index) => {
      if (orbitAnimationActive) {
        planet.style.animation = `gentle-float ${
          3 + index * 0.5
        }s ease-in-out infinite, orbit-${index % 3} ${
          10 + index * 2
        }s linear infinite`;
      } else {
        planet.style.animation = `gentle-float ${
          3 + index * 0.5
        }s ease-in-out infinite`;
      }
    });

    elements.animateOrbit.textContent = orbitAnimationActive
      ? "⏸️ Stop Animation"
      : "▶️ Animate Orbits";
    elements.animateOrbit.classList.toggle("active", orbitAnimationActive);
  }

  function togglePlanetLabels() {
    // Toggle planet name labels in 3D explorer
    labelsVisible = !labelsVisible;
    const planets = elements.planetSystem.querySelectorAll(".explorer-planet");

    planets.forEach((planetEl, index) => {
      const planet = appData.exoplanetDatabase[index];
      const existingLabel = planetEl.querySelector(".planet-label");

      if (labelsVisible && !existingLabel) {
        const label = document.createElement("div");
        label.className = "planet-label";
        label.textContent = planet.name;
        label.style.cssText = `
                    position: absolute;
                    top: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    white-space: nowrap;
                    pointer-events: none;
                `;
        planetEl.appendChild(label);
      } else if (!labelsVisible && existingLabel) {
        existingLabel.remove();
      }
    });

    elements.showLabels.textContent = labelsVisible
      ? "🏷️ Hide Labels"
      : "🏷️ Toggle Labels";
    elements.showLabels.classList.toggle("active", labelsVisible);
  }

  function zoomExplorer(factor) {
    // Zoom in/out in 3D explorer
    const currentTransform =
      elements.planetSystem.style.transform || "translate(-50%, -50%) scale(1)";
    const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
    const currentScale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
    const newScale = Math.min(Math.max(currentScale * factor, 0.5), 3);

    elements.planetSystem.style.transform = `translate(-50%, -50%) scale(${newScale})`;
  }

  function toggleFullscreen() {
    // Toggle fullscreen mode for 3D explorer
    const sceneContainer = elements.sceneContainer;

    if (!document.fullscreenElement) {
      sceneContainer.requestFullscreen().catch((err) => {
        console.log("Fullscreen not available:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  // ====================================
  // DOCUMENTATION PAGE
  // Static documentation functionality
  // API Integration Point: Connect to CMS or documentation management system
  // ====================================

  function initDocumentation() {
    // Documentation page is primarily static HTML
    // API Integration Point: Dynamic documentation loading
    // loadDynamicDocumentation().then(docs => { ... })
  }

  // ====================================
  // HISTORY PAGE
  // Chronological timeline of user activities
  // API Integration Points: Activity logging, timeline visualization
  // ====================================

  function initHistoryPage() {
    // Initialize history page functionality

    if (elements.historyTypeFilter) {
      elements.historyTypeFilter.addEventListener(
        "change",
        updateHistoryTimeline
      );
    }

    if (elements.historyDateFilter) {
      elements.historyDateFilter.addEventListener(
        "change",
        updateHistoryTimeline
      );
    }

    if (elements.clearAllHistory) {
      elements.clearAllHistory.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all history?")) {
          state.searchHistory = [];
          updateHistoryDisplay();
          updateHistoryTimeline();
        }
      });
    }
  }

  function updateHistoryTimeline() {
    // Update chronological history timeline display
    if (!elements.historyTimeline) return;

    const typeFilter = elements.historyTypeFilter?.value || "all";
    const dateFilter = elements.historyDateFilter?.value || "all";

    let filteredHistory = state.searchHistory;

    // Apply type filter
    if (typeFilter !== "all") {
      filteredHistory = filteredHistory.filter(
        (item) => item.type === typeFilter
      );
    }

    // Apply date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const filterDate = new Date();

      switch (dateFilter) {
        case "today":
          filterDate.setHours(0, 0, 0, 0);
          break;
        case "week":
          filterDate.setDate(now.getDate() - 7);
          break;
        case "month":
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }

      filteredHistory = filteredHistory.filter(
        (item) => new Date(item.timestamp) >= filterDate
      );
    }

    if (filteredHistory.length === 0) {
      elements.historyTimeline.innerHTML =
        '<div class="no-history">No history available. Start using EXOPEDIA to see your analysis timeline here.</div>';
      return;
    }

    const html = filteredHistory
      .map(
        (item) => `
            <div class="history-timeline-item">
                <div class="timeline-marker ${item.type}"></div>
                <div class="timeline-item-content">
                    <div class="timeline-item-title">
                        ${getHistoryItemTitle(item)}
                    </div>
                    <div class="timeline-item-description">
                        ${getHistoryItemDescription(item)}
                    </div>
                    <div class="timeline-item-meta">
                        <span>${item.timestamp.toLocaleDateString()}</span>
                        <span>${item.timestamp.toLocaleTimeString()}</span>
                        <span class="status-${item.status}">${
          item.status
        }</span>
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    elements.historyTimeline.innerHTML = html;
  }

  function getHistoryItemTitle(item) {
    // Generate title for history timeline items
    switch (item.type) {
      case "analysis":
        return `AI Analysis ${
          item.classification ? "- " + item.classification.toUpperCase() : ""
        }`;
      case "search":
        return `Database Search: "${item.query}"`;
      case "export":
        return "Data Export";
      default:
        return "Unknown Activity";
    }
  }

  function getHistoryItemDescription(item) {
    // Generate description for history timeline items
    switch (item.type) {
      case "analysis":
        return `Confidence: ${
          item.confidence || "N/A"
        }%, Processing time: ${item.processing_time || "N/A"}s`;
      case "search":
        return `Found ${item.results} results in exoplanet database`;
      case "export":
        return item.description || "Data exported successfully";
      default:
        return "";
    }
  }

  // ====================================
  // TUTORIAL SYSTEM
  // Guided introduction for new users
  // API Integration Point: Connect to learning management system
  // ====================================

  function initTutorial() {
    // Initialize tutorial system
    state.currentTutorialStep = 0;
    updateTutorialContent();

    if (elements.prevStep) {
      elements.prevStep.addEventListener("click", () => {
        if (state.currentTutorialStep > 0) {
          state.currentTutorialStep--;
          updateTutorialContent();
        }
      });
    }

    if (elements.nextStep) {
      elements.nextStep.addEventListener("click", () => {
        if (
          state.currentTutorialStep <
          appData.gettingStartedGuide.steps.length - 1
        ) {
          state.currentTutorialStep++;
          updateTutorialContent();
        } else {
          // Tutorial complete - navigate to detection page
          closeModal("tutorialModal");
          switchView("detection");

          // API Integration Point: Track tutorial completion
          // trackTutorialCompletion();
        }
      });
    }
  }

  function updateTutorialContent() {
    // Update tutorial content for current step
    const step = appData.gettingStartedGuide.steps[state.currentTutorialStep];
    const totalSteps = appData.gettingStartedGuide.steps.length;

    if (elements.tutorialContent) {
      elements.tutorialContent.innerHTML = `
                <div class="tutorial-step active">
                    <h4>Step ${step.step}: ${step.title}</h4>
                    <p>${step.description}</p>
                </div>
            `;
    }

    if (elements.stepIndicator) {
      elements.stepIndicator.textContent = `Step ${
        state.currentTutorialStep + 1
      } of ${totalSteps}`;
    }

    if (elements.prevStep) {
      elements.prevStep.disabled = state.currentTutorialStep === 0;
    }

    if (elements.nextStep) {
      elements.nextStep.textContent =
        state.currentTutorialStep === totalSteps - 1 ? "Get Started!" : "Next";
    }
  }

  // ====================================
  // MODAL SYSTEM
  // Modal dialog management for forms and information displays
  // ====================================

  function initModals() {
    // Initialize all modal functionality

    // Manual Input Modal
    if (elements.closeManualInput) {
      elements.closeManualInput.addEventListener("click", () =>
        closeModal("manualInputModal")
      );
    }
    if (elements.cancelManualInput) {
      elements.cancelManualInput.addEventListener("click", () =>
        closeModal("manualInputModal")
      );
    }
    if (elements.manualInputForm) {
      elements.manualInputForm.addEventListener("submit", handleManualInput);
    }

    // Tutorial Modal
    if (elements.closeTutorial) {
      elements.closeTutorial.addEventListener("click", () =>
        closeModal("tutorialModal")
      );
    }

    // Category Modal
    if (elements.closeCategoryModal) {
      elements.closeCategoryModal.addEventListener("click", () =>
        closeModal("categoryModal")
      );
    }

    // Similarity Modal
    if (elements.closeSimilarityModal) {
      elements.closeSimilarityModal.addEventListener("click", () =>
        closeModal("similarityModal")
      );
    }
    if (elements.cancelSimilarity) {
      elements.cancelSimilarity.addEventListener("click", () =>
        closeModal("similarityModal")
      );
    }
    if (elements.similarityForm) {
      elements.similarityForm.addEventListener(
        "submit",
        handleSimilaritySearch
      );
    }

    // Advanced Filters Modal
    if (elements.closeAdvancedFilters) {
      elements.closeAdvancedFilters.addEventListener("click", () =>
        closeModal("advancedFiltersModal")
      );
    }
    if (elements.resetFilters) {
      elements.resetFilters.addEventListener("click", resetAdvancedFilters);
    }
    if (elements.advancedFiltersForm) {
      elements.advancedFiltersForm.addEventListener(
        "submit",
        handleAdvancedFilters
      );
    }

    // Close modals on overlay click
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (
          e.target === modal ||
          e.target.classList.contains("modal-overlay")
        ) {
          closeModal(modal.id);
        }
      });
    });
  }

  function openModal(modalId) {
    // Open modal dialog
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
    }
  }

  function closeModal(modalId) {
    // Close modal dialog
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
    }
  }

  function handleManualInput(e) {
    // Handle manual parameter input form submission
    // API Integration Point: Validate parameters with astronomical databases
    // validateAstronomicalParameters(formData).then(isValid => { ... })

    e.preventDefault();

    const formData = new FormData(e.target);
    state.manualInput = {
      orbital_period: parseFloat(formData.get("orbitalPeriod")),
      transit_duration: parseFloat(formData.get("transitDuration")),
      planet_radius: parseFloat(formData.get("planetRadius")),
      stellar_temperature: parseFloat(formData.get("stellarTemperature")),
      transit_depth: parseFloat(formData.get("transitDepth")),
    };

    closeModal("manualInputModal");
    updateAnalyzeButton();

    alert(
      `Parameters saved successfully!\n\nOrbital Period: ${state.manualInput.orbital_period} days\nTransit Duration: ${state.manualInput.transit_duration} hours\nPlanet Radius: ${state.manualInput.planet_radius} R⊕\nStellar Temperature: ${state.manualInput.stellar_temperature} K\nTransit Depth: ${state.manualInput.transit_depth} ppm\n\nReady for AI analysis!`
    );

    // API Integration Point: Log manual parameter entry
    // logManualParameterEntry(state.manualInput);
  }

  function handleSimilaritySearch(e) {
    // Handle similarity search form submission
    // API Integration Point: Connect to similarity computation service
    // computeSimilarity(searchCriteria).then(results => { ... })

    e.preventDefault();

    const formData = new FormData(e.target);
    const targetRadius = parseFloat(formData.get("targetRadius"));
    const targetPeriod = parseFloat(formData.get("targetPeriod"));
    const maxDistance = parseFloat(formData.get("targetDistance"));
    const similarityThreshold = parseFloat(formData.get("similarityThreshold"));

    const results = findSimilarByParameters(
      targetRadius,
      targetPeriod,
      maxDistance,
      similarityThreshold
    );
    displaySimilarityResults(results);
  }

  function findSimilarByParameters(
    targetRadius,
    targetPeriod,
    maxDistance,
    threshold
  ) {
    // Find similar planets based on input parameters
    // API Integration Point: Replace with ML similarity computation service

    return appData.exoplanetDatabase
      .filter((planet) => planet.distance_ly <= maxDistance)
      .map((planet) => {
        const radiusDiff =
          Math.abs(planet.radius_earth - targetRadius) / targetRadius;
        const periodDiff =
          Math.abs(planet.orbital_period_days - targetPeriod) / targetPeriod;
        const similarity = Math.max(
          0,
          100 - ((radiusDiff + periodDiff) / 2) * 100
        );

        return { ...planet, similarity };
      })
      .filter((planet) => planet.similarity >= threshold)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 10);
  }

  function displaySimilarityResults(results) {
    // Display similarity search results
    if (results.length === 0) {
      const html =
        '<div class="no-results">No planets found matching your similarity criteria. Try adjusting the parameters or lowering the similarity threshold.</div>';
      elements.similarityResultsModal.innerHTML = html;
      elements.similarityResults.innerHTML = html;
      return;
    }

    const html = results
      .map(
        (planet) => `
            <div class="planet-item" onclick="showPlanetDetails('${
              planet.id
            }')">
                <div class="planet-visual" style="background: linear-gradient(135deg, ${getPlanetColor(
                  planet
                )});"></div>
                <div class="planet-info">
                    <h4>${planet.name}</h4>
                    <div class="planet-details">
                        <span>${planet.distance_ly} ly</span>
                        <span>${planet.radius_earth} R⊕</span>
                        <span>${planet.orbital_period_days} days</span>
                        <span>${planet.discovery_mission}</span>
                    </div>
                </div>
                <div class="similarity-score">
                    <div class="similarity-percentage">${Math.round(
                      planet.similarity
                    )}%</div>
                    <div class="similarity-label">Match</div>
                </div>
            </div>
        `
      )
      .join("");

    elements.similarityResultsModal.innerHTML = html;
    elements.similarityResults.innerHTML = html;
  }

  function handleAdvancedFilters(e) {
    // Handle advanced filters form submission
    e.preventDefault();

    const formData = new FormData(e.target);
    const filters = {
      minRadius: formData.get("minRadius"),
      maxRadius: formData.get("maxRadius"),
      minDistance: formData.get("minDistance"),
      maxDistance: formData.get("maxDistance"),
      discoveryMission: formData.get("discoveryMission"),
      discoveryYear: formData.get("discoveryYear"),
    };

    applyAdvancedFilters(filters);
    closeModal("advancedFiltersModal");
  }

  function applyAdvancedFilters(filters) {
    // Apply advanced search filters
    // API Integration Point: Connect to advanced search API

    let results = appData.exoplanetDatabase;

    // Apply numerical filters
    if (filters.minRadius) {
      results = results.filter(
        (p) => p.radius_earth >= parseFloat(filters.minRadius)
      );
    }
    if (filters.maxRadius) {
      results = results.filter(
        (p) => p.radius_earth <= parseFloat(filters.maxRadius)
      );
    }
    if (filters.minDistance) {
      results = results.filter(
        (p) => p.distance_ly >= parseFloat(filters.minDistance)
      );
    }
    if (filters.maxDistance) {
      results = results.filter(
        (p) => p.distance_ly <= parseFloat(filters.maxDistance)
      );
    }

    // Apply categorical filters
    if (filters.discoveryMission) {
      results = results.filter(
        (p) => p.discovery_mission === filters.discoveryMission
      );
    }
    if (filters.discoveryYear) {
      const [startYear, endYear] = filters.discoveryYear
        .split("-")
        .map((y) => parseInt(y));
      results = results.filter((p) => {
        const year = parseInt(p.discovery_date.split("-")[0]);
        return year >= startYear && year <= endYear;
      });
    }

    displaySearchResults(results, "Advanced Filters Applied");

    // Add to search history
    addToHistory({
      type: "search",
      timestamp: new Date(),
      query: `Advanced Filter (${results.length} results)`,
      results: results.length,
      status: "completed",
    });
  }

  function resetAdvancedFilters() {
    // Reset advanced filters form
    elements.advancedFiltersForm.reset();
  }

  // ====================================
  // MOBILE MENU
  // Mobile navigation functionality
  // ====================================

  function initMobileMenu() {
    // Initialize mobile menu toggle
    if (elements.mobileMenuToggle) {
      elements.mobileMenuToggle.addEventListener("click", toggleMobileMenu);
    }
  }

  function toggleMobileMenu() {
    // Toggle mobile navigation menu
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("mobile-open");

    elements.mobileMenuToggle.classList.toggle("active");
  }

  // ====================================
  // GLOBAL FUNCTIONS
  // Functions accessible from HTML onclick attributes
  // ====================================

  window.showPlanetDetails = function (planetId) {
    // Show detailed planet information
    // API Integration Point: Fetch detailed planet data from API
    // fetchPlanetDetails(planetId).then(details => { ... })

    const planet = appData.exoplanetDatabase.find((p) => p.id === planetId);
    if (planet) {
      const details = `
${planet.name} (${planet.id})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 Classification: ${planet.classification}
📏 Distance: ${planet.distance_ly} light-years
⭕ Radius: ${planet.radius_earth} Earth radii
🔄 Orbital Period: ${planet.orbital_period_days} days  
🌡️ Host Star Temperature: ${planet.stellar_temp_k} K
📉 Transit Depth: ${planet.transit_depth_ppm} ppm
🌱 Habitability Score: ${planet.habitability_score}/10
🚀 Discovery: ${planet.discovery_date.split("-")[0]} (${
        planet.discovery_mission
      })
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `;
      alert(details);
    }
  };

  window.comparePlanet = function (planetId) {
    // Compare planet with Earth and other similar planets
    // API Integration Point: Connect to planet comparison service

    const planet = appData.exoplanetDatabase.find((p) => p.id === planetId);
    if (planet) {
      alert(
        `Comparison feature for ${planet.name} would show detailed analysis against Earth and other similar exoplanets. This would include size ratio, orbital characteristics, habitability potential, and discovery significance.`
      );

      // API Integration Point: Load comparison data
      // loadPlanetComparison(planetId).then(comparison => { ... })
    }
  };

  window.exportPlanetData = function (planetId) {
    // Export individual planet data
    // API Integration Point: Connect to data export service

    const planet = appData.exoplanetDatabase.find((p) => p.id === planetId);
    if (planet) {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(planet, null, 2));
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", `${planet.id}_data.json`);
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();

      alert(`Data for ${planet.name} exported successfully!`);
    }
  };

  // ====================================
  // KEYBOARD SHORTCUTS
  // Enhance usability with keyboard navigation
  // ====================================

  document.addEventListener("keydown", (e) => {
    // ESC key - close all modals
    if (e.key === "Escape") {
      document.querySelectorAll(".modal:not(.hidden)").forEach((modal) => {
        closeModal(modal.id);
      });
    }

    // Number keys 1-7 - quick navigation
    const keyNum = parseInt(e.key);
    if (keyNum >= 1 && keyNum <= 7 && !e.ctrlKey && !e.altKey) {
      const views = [
        "landing",
        "detection",
        "results",
        "dashboard",
        "explorer",
        "documentation",
        "history",
      ];
      if (views[keyNum - 1]) {
        switchView(views[keyNum - 1]);
      }
    }

    // Ctrl+F in dashboard - focus search
    if (e.ctrlKey && e.key === "f" && state.currentView === "dashboard") {
      e.preventDefault();
      elements.planetSearchInput.focus();
    }
  });

  // ====================================
  // RESPONSIVE DESIGN
  // Handle responsive behavior and window resize
  // ====================================

  window.addEventListener("resize", () => {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768) {
      document.querySelector(".nav-links")?.classList.remove("mobile-open");
      elements.mobileMenuToggle?.classList.remove("active");
    }
  });

  // ====================================
  // CONSOLE WELCOME MESSAGE
  // Developer information and shortcuts
  // ====================================

  console.log(`
    🚀 EXOPEDIA v3.0 - Enhanced Platform Loaded! 🚀
    
    ✨ New Features Added:
    • Project description and Get Started tutorial
    • Latest discovery timeline on homepage
    • Clickable dashboard statistics with category details
    • Enhanced results page with parameters and dataset info
    • Documentation page with comprehensive guides
    • History page with chronological timeline
    • Improved AI detection interface with progress bars
    • Enhanced file upload with hover expansion
    • Error handling and data insufficiency warnings
    • SCROLLABLE MANUAL INPUT - Fixed overflow issue!
    
    🎮 Navigation Shortcuts:
    • Keys 1-7: Quick view switching (including new pages)
    • ESC: Close modals
    • Ctrl+F (Dashboard): Focus search
    
    🔬 Platform Statistics:
    • ${appData.platformStats.confirmed_exoplanets} Confirmed Exoplanets
    • ${appData.platformStats.candidate_exoplanets} Candidate Exoplanets  
    • ${appData.platformStats.false_positives} False Positives Identified
    • ${appData.platformStats.total_analyses} Total Analyses Performed
    • ${appData.platformStats.average_accuracy}% Average AI Accuracy
    
    📚 API Integration Points Available:
    • File Processing API (detection interface)
    • AI/ML Analysis Service (analysis engine)
    • Exoplanet Database API (search & similarity)
    • User Analytics API (history & tracking)
    • Export/Sharing Services (results management)
    • Real-time Statistics API (dashboard metrics)
    
    Ready for enhanced exoplanet discovery! 🌌
    `);
});

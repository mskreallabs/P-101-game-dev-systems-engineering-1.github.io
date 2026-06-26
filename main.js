
/* Merged from script.js */

      // Navigation Dom Control Elements
      const menuIcon = document.querySelector(".menu-icon");
      const closeIcon = document.querySelector(".close-icon");
      const mobileMenuItems = document.querySelector(".mobile-menu-items");
      const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

      const searchContainer = document.querySelector(".search-container");
      const searchIcons = document.querySelectorAll(".search-icon");
      const searchInput = document.querySelector(".search-input-container input[type='search']");

      // UI Drawer Management Listeners
      menuIcon.addEventListener("click", () => {
        mobileMenuItems.classList.add("active");
      });

      closeIcon.addEventListener("click", () => {
        mobileMenuItems.classList.remove("active");
      });

      allMobileMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenuItems.classList.remove("active");
        });
      });

      // Search Modal Handlers
      searchIcons.forEach((searchIcon) => {
        searchIcon.addEventListener("click", (e) => {
          e.stopPropagation();
          searchContainer.classList.add("active");
          if(searchInput) searchInput.focus();
        });
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          searchContainer.classList.remove("active");
          if(searchInput) searchInput.value = "";
        }
      });

      document.addEventListener("click", (e) => {
        if (searchContainer.classList.contains("active")) {
          if (!e.target.closest(".search-input-container") && !e.target.closest(".search-btn")) {
            searchContainer.classList.remove("active");
            if(searchInput) searchInput.value = "";
          }
        }
      });

      /* ==========================================================================
         NATIVE DYNAMIC HIGH PERFORMANCE 3D VIEWPORT CANVAS BACKGROUND PIPELINE
         ========================================================================== */
      const canvas = document.getElementById("canvas3d");
      const ctx = canvas.getContext("2d");

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      // Handle Display Hardware Resize Buffers dynamically
      window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      // Simulation Array Vectors
      const pointCount = 45;
      const points = [];
      const connectionDistance = 150;

      // Instantiate Vector Array Entities
      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
        });
      }

      // Track Mouse Positions to affect 3D environment space calculations
      let mouse = { x: null, y: null, targetX: null, targetY: null };
      window.addEventListener("mousemove", (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
      });
      
      window.addEventListener("mouseout", () => {
        mouse.targetX = null;
        mouse.targetY = null;
      });

      // Primary Animation Graph Execution Loop
      function animatePipeline() {
        ctx.clearRect(0, 0, width, height);

        // Smoothly interpolate cursor metrics
        if (mouse.targetX !== null) {
          if (mouse.x === null) {
            mouse.x = mouse.targetX;
            mouse.y = mouse.targetY;
          } else {
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;
          }
        } else {
          mouse.x = null;
          mouse.y = null;
        }

        // Process Node Matrices and Transformations
        for (let i = 0; i < points.length; i++) {
          const p = points[i];

          p.x += p.vx;
          p.y += p.vy;

          // Process Boundary Collisions
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Process local vector variations based on interactive tracking data
          if (mouse.x !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              const force = (200 - dist) / 200;
              p.x -= (dx / dist) * force * 1.2;
              p.y -= (dy / dist) * force * 1.2;
            }
          }

          // Render Coordinate Point Core Array Elements
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(96, 165, 250, 0.4)";
          ctx.fill();

          // Calculate Dynamic Grid Geometry Arrays (Line Rendering Pipeline)
          for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const alpha = (1 - dist / connectionDistance) * 0.12;
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animatePipeline);
      }

      // Initialize Performance Graphics Engine Layer background loop
      animatePipeline();
    


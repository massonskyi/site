document.addEventListener('DOMContentLoaded', () => {
    class PuzzleGame {
        constructor() {
            // Configuration constants
            this.BASE_SCREEN_WIDTH = 1920;
            this.POSITION_TOLERANCE = 250;
            this.TOTAL_PIECES = 10;

            // DOM elements
            this.elements = {
                popup: document.getElementById('popup'),
                popupTrigger: document.getElementById('popup-trigger'),
                closeBtn: document.querySelector('.close-btn'),
                contentBlocks: Array.from(document.getElementsByClassName("picture")),
                imageBlocks: Array.from(document.getElementsByClassName("image-block-content")),
                mainContent: document.querySelector(".main-content"),
                finalPicture: document.querySelector(".part-picture-0"),
                checkButton: document.getElementById("btn-check"),
                resetButton: document.getElementById("btn-reset"),
                counterDisplay: document.querySelector("#counter"),
            };

            // Game state
            this.deg = [];
            this.isDragging = false;
            this.coordinates = null;
            
            // Base coordinates configuration
            this.baseCoordinates = {
                x: [1723, 1400, 1510, 1474, 1459, 1398, 1704, 1713, 1560, 1503],
                y: [586, 607, 607, 544, 472, 363, 702, 502, 417, 370],
                startX: [50, 220, 390, 50, 220, 390, 50, 220, 390, 50],
                startY: [250, 250, 250, 420, 420, 420, 590, 590, 590, 760],
                startDeg: [90, 0, 270, 90, 270, 0, 0, 90, 90, 270]
            };

            // Initialize the game
            this.init();
        }

        init() {
            this.setupTooltip();
            this.setupEventListeners();
            this.updateCoordinates();
            this.initializeAllPieces();
        }

        setupTooltip() {
            const tooltipCounter = document.createElement("div");
            tooltipCounter.classList.add("tooltip-counter");
            tooltipCounter.textContent = "Количество правильно расположенных картинок";
            document.body.appendChild(tooltipCounter);
            this.elements.tooltipCounter = tooltipCounter;
        }

        setupEventListeners() {
            // Popup handlers
            this.elements.popupTrigger?.addEventListener('click', (e) => {
                e.preventDefault();
                this.elements.popup.style.display = 'block';
            });

            this.elements.closeBtn?.addEventListener('click', () => {
                this.elements.popup.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === this.elements.popup) {
                    this.elements.popup.style.display = 'none';
                }
            });

            // Game control handlers
            window.addEventListener('resize', this.handleResize.bind(this));
            this.elements.checkButton.addEventListener('click', this.checkAllPositions.bind(this));
            this.elements.resetButton.addEventListener('click', this.resetAllPieces.bind(this));

            // Counter tooltip handlers
            this.elements.counterDisplay.addEventListener('mouseenter', this.showTooltip.bind(this));
            this.elements.counterDisplay.addEventListener('mouseleave', this.hideTooltip.bind(this));

            // Prevent context menu on right click
            document.addEventListener('contextmenu', (e) => {
                if (this.elements.contentBlocks.some(block => block.contains(e.target))) {
                    e.preventDefault();
                }
            });
        }

        updateCoordinates() {
            const screenWidth = window.innerWidth;
            const screenRatio = Math.min(screenWidth / this.BASE_SCREEN_WIDTH, 1.2);
            
            this.coordinates = {
                x: this.baseCoordinates.x.map(x => Math.round(x * screenRatio)),
                y: this.baseCoordinates.y,
                startX: this.baseCoordinates.startX.map(x => Math.round(x * screenRatio)),
                startY: this.baseCoordinates.startY,
                startDeg: [...this.baseCoordinates.startDeg]
            };
            console.log(this.baseCoordinates.x)
            console.log(this.coordinates.x)
            this.deg = [...this.coordinates.startDeg];
        }

        initializeAllPieces() {
            this.elements.contentBlocks.forEach((_, index) => {
                this.initializePiece(index);
            });
        }

        initializePiece(index) {
            this.setupRotation(index);
            this.setupDragging(index);
            this.resetPosition(index);
        }

        setupRotation(index) {
            const block = this.elements.contentBlocks[index];
            
            block.addEventListener('dblclick', () => {
                this.deg[index] = (this.deg[index] + 90) % 360;
                block.style.transform = `rotate(${this.deg[index]}deg)`;
                
                // Add rotation animation
                block.style.transition = 'transform 0.3s ease-out';
                setTimeout(() => {
                    block.style.transition = '';
                }, 300);
            });
        }

        setupDragging(index) {
            const block = this.elements.contentBlocks[index];
            const img = this.elements.imageBlocks[index];

            let startX, startY;

            const handleStart = (e) => {
                if (this.isDragging) return;
                this.isDragging = true;
                
                const event = e.touches ? e.touches[0] : e;
                const rect = img.getBoundingClientRect();
                
                startX = event.clientX - rect.left;
                startY = event.clientY - rect.top;
                
                img.style.position = 'absolute';
                img.style.zIndex = '1000';
                
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseup', handleEnd);
                document.addEventListener('touchmove', handleMove);
                document.addEventListener('touchend', handleEnd);
            };

            const handleMove = (e) => {
                if (!this.isDragging) return;
                
                const event = e.touches ? e.touches[0] : e;
                
                requestAnimationFrame(() => {
                    img.style.left = `${event.clientX - startX}px`;
                    img.style.top = `${event.clientY - startY}px`;
                });
            };

            const handleEnd = () => {
                this.isDragging = false;
                img.style.zIndex = '1';
                
                document.removeEventListener('mousemove', handleMove);
                document.removeEventListener('mouseup', handleEnd);
                document.removeEventListener('touchmove', handleMove);
                document.removeEventListener('touchend', handleEnd);
            };

            block.addEventListener('mousedown', handleStart);
            block.addEventListener('touchstart', handleStart);
            block.addEventListener('dragstart', (e) => e.preventDefault());
        }

        checkAllPositions() {
            let correctCount = 0;
            
            this.elements.contentBlocks.forEach((_, index) => {
                correctCount += this.checkPosition(index);
            });

            this.elements.counterDisplay.textContent = `${correctCount}/${this.TOTAL_PIECES}`;

            if (correctCount === this.TOTAL_PIECES) {
                this.handlePuzzleCompletion();
            }
        }

        checkPosition(index) {
            const img = this.elements.imageBlocks[index];
            const block = this.elements.contentBlocks[index];

            const isPositionCorrect =
                Math.abs(img.offsetLeft - this.coordinates.x[index]) <= this.POSITION_TOLERANCE &&
                Math.abs(img.offsetTop - this.coordinates.y[index]) <= this.POSITION_TOLERANCE &&
                this.deg[index] % 360 === 0;

            if (isPositionCorrect) {
                img.style.left = `${this.coordinates.x[index]}px`;
                img.style.top = `${this.coordinates.y[index]}px`;
                block.style.border = 'none';
                
                // Add success animation
                block.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.1)' },
                    { transform: 'scale(1)' }
                ], {
                    duration: 300,
                    easing: 'ease-out'
                });
            }

            return isPositionCorrect ? 1 : 0;
        }

        handlePuzzleCompletion() {
            // Hide all pieces
            this.elements.imageBlocks.forEach(img => {
                img.style.left = '-9999px';
            });

            // Show and animate final picture
            this.elements.finalPicture.style.left = '750px';
            this.animateFinalPicture();

            // Show completion message
            this.showCompletionMessage();
        }

        showCompletionMessage() {
            const message = document.createElement('div');
            message.className = 'completion-message';
            message.textContent = 'Поздравляем! Пазл собран правильно!';
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.9);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.3);
                z-index: 1001;
            `;
            
            document.body.appendChild(message);
            setTimeout(() => message.remove(), 3000);
        }

        resetAllPieces() {
            this.elements.contentBlocks.forEach((_, index) => {
                this.resetPosition(index);
            });
            this.elements.finalPicture.style.left = '-9999px';
            this.elements.counterDisplay.textContent = '0/10';
        }

        resetPosition(index) {
            const img = this.elements.imageBlocks[index];
            const block = this.elements.contentBlocks[index];

            img.style.left = `${this.coordinates.startX[index]}px`;
            img.style.top = `${this.coordinates.startY[index]}px`;
            block.style.border = '2px dashed gray';
            
            // Add reset animation
            block.style.transition = 'transform 0.3s ease-out';
            block.style.transform = `rotate(${this.coordinates.startDeg[index]}deg)`;
            setTimeout(() => {
                block.style.transition = '';
            }, 300);
            
            this.deg[index] = this.coordinates.startDeg[index];
        }

        animateFinalPicture() {
            this.elements.finalPicture.style.position = 'relative';
            
            this.elements.finalPicture.animate([
                { transform: 'translate(0)' },
                { transform: 'translate(-20px, 0px)' },
                { transform: 'translate(0px, 10px)' },
                { transform: 'translate(20px, 0px)' },
                { transform: 'translate(0px, -10px)' }
            ], {
                duration: 1500,
                iterations: 1,
                easing: 'ease-out'
            });
        }

        handleResize() {
            this.updateCoordinates();
            this.resetAllPieces();
        }

        showTooltip(e) {
            const rect = e.target.getBoundingClientRect();
            this.elements.tooltipCounter.style.display = 'block';
            this.elements.tooltipCounter.style.left = `${rect.left + rect.width / 2 - this.elements.tooltipCounter.offsetWidth / 2}px`;
            this.elements.tooltipCounter.style.top = `${rect.top - this.elements.tooltipCounter.offsetHeight - 10}px`;
            this.elements.tooltipCounter.style.opacity = '1';
        }

        hideTooltip() {
            this.elements.tooltipCounter.style.display = 'none';
            this.elements.tooltipCounter.style.opacity = '0';
        }
    }

    // Initialize the game
    const puzzle = new PuzzleGame();
});
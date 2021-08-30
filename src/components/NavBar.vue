<template>
    <header :class="{ 'scrolled-nav' : scrollNav }">
        <nav>
            <div class="logo">
                <p class="logo-text">Melika</p>
                <span></span>
                <span></span>
            </div>

            <ul v-show="!mobile" class="nav-list">
                <li>
                    <a href="#" class="navbar-item">Education</a>
                </li>

                <li>
                    <a href="#" class="navbar-item">Experience</a>
                </li>

                <li>
                    <a href="#" class="navbar-item">Projects</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/melikamirsajjadi/" target="_blank" title="LinkedIn" class="navbar-item">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-icon" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/msmel01" target="_blank" title="GitHub" class="navbar-item">
                        <font-awesome-icon :icon="['fab', 'github']" class="fa-icon" />
                    </a>
                </li>
            </ul>

            <div class="toggle-icon"  @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active' : mobileNav }">
                <font-awesome-icon :icon="['fas', 'bars']" class="fa-lg" />
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <a href="#" class="navbar-item">Education</a>
                    </li>

                    <li>
                        <a href="#" class="navbar-item">Experience</a>
                    </li>

                    <li>
                        <a href="#" class="navbar-item">Projects</a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/melikamirsajjadi/" target="_blank" title="LinkedIn" class="navbar-item">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-icon" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/msmel01" target="_blank" title="GitHub" class="navbar-item">
                            <font-awesome-icon :icon="['fab', 'github']" class="fa-icon" />
                        </a>
                    </li>
                </ul>
            </transition>
        
        </nav>
    </header>
</template>

<script>
    import '@/styles/navbar.scss';
    export default {
        name: 'Navigation',
        data() {
            return {
                scrollNav: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            }
        },
        created() {
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },
            updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition >= 50) {
                    this.scrollNav = true;
                    return;
                }
                this.scrollNav = false;
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 750) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        }
    };
</script>
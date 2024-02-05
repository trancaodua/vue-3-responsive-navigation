<template>
    <header :class="{ 'scrolled-nav': scrollNav }">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">About</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">Porfolio</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">Contact</router-link>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">About</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">Porfolio</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">Contact</router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "the-navigation",
    setup() {
        console.log('test2');
        const scrollNav = ref(null);
        const mobile = ref(null);
        const mobileNav = ref(true);
        const windowWidth = ref(null);

        function toggleMobileNav() {
            mobileNav.value = !mobileNav.value;
        }

        function updateScroll() {
            console.log('test');
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                scrollNav.value = true;
                return;
            }

            scrollNav.value = false;
        }

        function checkScreen() {
            windowWidth.value = window.innerWidth;
            if (windowWidth.value <= 750) {
                mobile.value = true;
                return;
            }

            mobile.value = false;
            mobileNav.value = false;
        }

        window.addEventListener('resize', checkScreen);
        checkScreen();

        return {
            scrollNav,
            mobile,
            mobileNav,
            windowWidth,
            toggleMobileNav,
            updateScroll
        }
    },
    mounted() {
        console.log('test1');
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    color: #fff;
    top: 0;
    left: 0;

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;

        @media(min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 15px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                transition: 0.5s ease all;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            position: absolute;
            align-items: center;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg)
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            max-width: 250px;
            height: 100%;
            background-color: #fff;
            top: 0;
            left: 0;
            margin: 0;

            li {
                margin-left: 0;

                .link {
                    color: #000;
                }
            }
        }
    }
}

.scrolled-nav {
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 8px 0;

        .branding {
            img {
                width: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 0.8s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}
</style>
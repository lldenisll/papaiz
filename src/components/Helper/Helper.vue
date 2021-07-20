<template>
    <div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
        <section class="widget theme-helper-content">
            <header class="theme-helper-header d-flex p-0">
                <div class="theme-helper-toggler" @click="toggle">
                    <div class="theme-helper-spinner text-white">
                        <i class="la la-cog"></i>
                        <i class="la la-cog"></i>
                    </div>
                </div>
                <h6>Informações</h6>
            </header>
            <div class="widget-body mt-3">
                <div class="mt-4">
                    <a href="https://machiron.com.br"
                    target="_blank"
                    role="button"
                    class="btn btn-warning btn-rounded-f btn-block fs-mini text-white">
                        Machiron
                    </a>
                    <a href="#"
                       target="_blank"
                       role="button"
                       class="btn btn-danger btn-rounded-f btn-block fs-mini text-white">
                        Whatsapp
                    </a>

                </div>
                <div class="d-flex justify-content-between mt-lg">
                    <a role="button"
                    target="_blank"
                    href="#"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="glyphicon glyphicon-headphones mr-xs mt-n-sm"></i>
                        Suporte
                    </a>
                    <a role="button"
                    target="_blank"
                    href="#"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="fa fa-github mr-xs"></i>
                        Github
                    </a>
                </div>
                <div class="mt-lg d-flex flex-column align-items-center theme-sharing">
                    <span class="fs-sm">
                        Nas redes!
                    </span>
                    <div class="d-flexjustify-content-center text-light mt-2 h2 mb-0">
                        <a target="_blank"
                        href="#">
                            <i class="fa fa-linkedin mx-3"></i>
                        </a>
                        <a href="#"
                        target="_blank">
                            <i class="fa fa-facebook mx-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Helper',
    data() {
        return {
            opened: false,
        }
    },
    methods: {
        toggle() {
            this.opened = !this.opened;
        }
    }
};
</script>

<style src="./Helper.scss" lang="scss" scoped />

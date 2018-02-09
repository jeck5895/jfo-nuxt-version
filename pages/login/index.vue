<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4 align-self-center">
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control form-control-sm" id="username" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control form-control-sm" id="password" placeholder="">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary">Sign me in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout:'default'
    }
</script>

<style>

</style>

<template>
    <section>
        <base-dialog v-if="isInputInvalid" title="Invalid Input !" @closeBaseDialog="confirmError()">
            <template #default>
                <p>Please enter a valid title, description and link (non-empty values).</p>
                <p>Try again.</p>
            </template>
            <template #actions>
                <base-button @click="confirmError()">Okay</base-button>
            </template>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitData">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" ref="titleInput">
                </div>
                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
                </div>
                <div class="form-control">
                    <label for="link">Link</label>
                    <input type="url" id="link" name="link" ref="linkInput">
                </div>
                <div>
                    <base-button type="submit">Add Resource</base-button>
                </div>
            </form>

        </base-card>
    </section>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            isInputInvalid: false,
        }
    },
    methods: {
        submitData() {
            const title = this.$refs.titleInput.value;
            const description = this.$refs.descInput.value;
            const link = this.$refs.linkInput.value;

            if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
                this.isInputInvalid = true;
                return;
            }
            this.isInputInvalid = false;

            this.addResource(title, description, link);
        },
        confirmError() {
            this.isInputInvalid = false;
        }
    }

}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
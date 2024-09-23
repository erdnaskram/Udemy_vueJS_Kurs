<template>
    <section>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">
                Stored Resources
            </base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </section>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',

            courses: [
                { id: "oficial-guide", title: "Official Guide", description: "The official guide to the learning resource app", link: "https://vuejs.org" },
                { id: "vue-mastery", title: "Vue Mastery", description: "The official guide to the learning resource app", link: "https://vue-mastery.com" },
                { id: "vue-school", title: "Vue School", description: "The official guide to the learning resource app", link: "https://vue-school.com" },
                { id: "google", title: "Google", description: "The official guide to the learning resource app", link: "https://google.com" },
            ]
        }
    },
    provide() {
        return {
            courses: this.courses,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            this.courses.unshift({ id: new Date().toISOString(), title, description, link });
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resourceId) {
            const resIndex = this.courses.findIndex((res) => res.id === resourceId);
            this.courses.splice(resIndex, 1);
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    }

}
</script>

<style></style>
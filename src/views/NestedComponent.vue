<template>
    <div>
        <!-- 정적 Prop 전달 -->
        <PageTitle title="정적 데이터 전달"/>
        <!-- 동적 Prop 전달 -->
        <PageTitle :title="this.title"/>
        <PageTitle v-bind:title="this.title"/>
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle';  // 컴포넌트(자식) import
    export default {
        components: {PageTitle},  // 현재 컴포넌트에서 사용할 컴포넌트 등록
        data() {
            return {
                title: 'Prop에 동적 데이터 전달'
            };
        }
    }
    

</script>

<template>
    <div>
        <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>  <!-- import한 컴포넌트 이름을 이용해서 태그 만들면 됨 -->
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle';  // 컴포넌트(자식) import
    export default {
        components: {PageTitle}  // 현재 컴포넌트에서 사용할 컴포넌트 등록
    }
</script>

import Giscus from './Giscus';

export default function Page() {
    return (
        <div className="min-h-[600px]">
            <Giscus
                repo="destroymayor/guestbook"
                repoId="R_kgDOHwPSeA"
                category="General"
                categoryId="DIC_kwDOHwPSeM4CQkUo"
                mapping="title"
            />
        </div>
    );
}

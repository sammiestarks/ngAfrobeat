export class News {
        id: number;
        title: string;
        subtitle: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        main_image: string;
        images: Array<string>;
        tags: Array<string>;
        category: Array<string>
}

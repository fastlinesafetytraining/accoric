import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string || 'http://localhost:3000';
    const defaultImageUrl = `${baseUrl}/images/accoric-social-media-image.svg`;

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 1,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/about-us`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/terms-of-service`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/accoric-dashcard`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/accoric-management`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/using-the-employee-table`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/searching-for-employees`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/adding-employees`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
        {
            url: `${baseUrl}/support/adding-certifications`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.5,
            images: [`${defaultImageUrl}`]
        },
		{
			url: `${baseUrl}/support/updating-employees`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/using-expired-certification-table`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/active-or-inactive-employees`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/using-notes`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/using-categories`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/generating-spreadsheets`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/secondary-users`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
		{
			url: `${baseUrl}/support/forgot-password`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.5,
            images: [`${defaultImageUrl}`]
		},
	];
}

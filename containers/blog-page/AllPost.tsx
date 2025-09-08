import React, { useMemo } from "react";
import { Layout, Row, Col } from "antd";
import BlogCardTemplate from "@/Components/templates/CardTemplate";
import getPostMetaData from "@/libs/utils/getPostMetaData";
import styles from "@styles/pages/blog.module.scss";

export default function AllPost() {
	const posts = useMemo(() => getPostMetaData(), []);

	return (
		<Layout className={styles.blogMainPage__blogGrid}>
			<Row
				gutter={[16, 16]}
				align={{ xs: "top", sm: "middle", md: "stretch" }}
				justify={{ xs: "center", sm: "space-around", md: "center" }}
			>
				<Col span={24}>
					<Row justify='space-between' align='middle'>
						<h2 className={styles.blogMainPage__blogGrid__title}>All Posts</h2>
					</Row>
				</Col>
				{posts.map((post) => (
					<Col lg={8} sm={12} xs={22} key={post.title}>
						<BlogCardTemplate post={post} />
					</Col>
				))}
			</Row>
		</Layout>
	);
}

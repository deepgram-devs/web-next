import slugify from "slugify";
const pick = function (attrs, allowed) {
	if (!attrs) {
		return null;
	}
	let h = {};
	for (let key in attrs) {
		let value = attrs[key];
		if (allowed.indexOf(key) > -1 && value !== null) {
			h[key] = value;
		}
	}
	if (attrs.id) {
	}
	return h;
};

const isEmailLinkType = (type) => type === "email";

export default {
	nodes: {
		horizontal_rule() {
			return {
				singleTag: "hr",
			};
		},
		blockquote() {
			return {
				tag: "blockquote",
			};
		},
		bullet_list() {
			return {
				tag: "ul",
			};
		},
		code_block(node) {
			return {
				tag: [
					"pre",
					{
						tag: "code",
						attrs: node.attrs,
					},
				],
			};
		},
		hard_break() {
			return {
				singleTag: "br",
			};
		},
		heading(node) {
			const newAttrs = { ...node.attrs, id: slugify(node.content[0].text, { lower: true }), style: "scroll-margin-top: 4.6rem" };

			return {
				tag: [
					{
						tag: `h${node.attrs.level}`,
						attrs: pick(newAttrs, ["id", "style"]),
					},
				],
			};
		},
		image(node) {
			return {
				singleTag: [
					{
						tag: "img",
						attrs: pick(node.attrs, ["src", "alt", "title"]),
					},
				],
			};
		},
		list_item() {
			return {
				tag: "li",
			};
		},
		ordered_list() {
			return {
				tag: "ol",
			};
		},
		paragraph() {
			return {
				tag: "p",
			};
		},
	},
	marks: {
		subscript() {
			return {
				tag: "sub",
			};
		},
		superscript() {
			return {
				tag: "sup",
			};
		},
		bold() {
			return {
				tag: "b",
			};
		},
		strike() {
			return {
				tag: "strike",
			};
		},
		underline() {
			return {
				tag: "u",
			};
		},
		strong() {
			return {
				tag: "strong",
			};
		},
		code() {
			return {
				tag: "code",
			};
		},
		italic() {
			return {
				tag: "i",
			};
		},
		link(node) {
			const attrs = { ...node.attrs };
			const { linktype = "url" } = node.attrs;

			if (isEmailLinkType(linktype)) {
				attrs.href = `mailto:${attrs.href}`;
			}

			if (attrs.anchor) {
				attrs.href = `${attrs.href}#${attrs.anchor}`;
				delete attrs.anchor;
			}

			return {
				tag: [
					{
						tag: "a",
						attrs: attrs,
					},
				],
			};
		},
		styled(node) {
			return {
				tag: [
					{
						tag: "span",
						attrs: node.attrs,
					},
				],
			};
		},
	},
};

const RemarkHTML = import("remark-html")

exports.pathPrefix = `/city-of-london-uk`


exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader"
                        },
                        {
                            loader: "remark-loader",
                            options: {
                                remarkOptions: {
                                    plugins: [RemarkHTML],
                                },
                            },
                        },
                    ],
                }
            ]
        }
    })
};
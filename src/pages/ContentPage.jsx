import React from "react";
import ContentPageHeader from "../components/ContentPageHeader/ContentPageHeader";
import Paragraph from "../components/Paragraph/Paragraph";
import Article from "../components/Article/Article";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  let { page, subpage } = useParams();
  let title = subpage ? subpage : page;

  title = title.replaceAll("-", " ");

  return (
    <div>
      <ContentPageHeader>{title}</ContentPageHeader>
      <Article>
        <Paragraph margin="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisi est
          sit amet facilisis magna etiam. Sit amet nisl purus in mollis nunc sed
          id semper. Cursus metus aliquam eleifend mi in nulla. Augue lacus
          viverra vitae congue eu. Amet luctus venenatis lectus magna fringilla.
          Sodales ut etiam sit amet nisl purus in mollis. Quam id leo in vitae.
          Laoreet id donec ultrices tincidunt. Nam libero justo laoreet sit amet
          cursus sit. Consequat interdum varius sit amet mattis vulputate. Justo
          eget magna fermentum iaculis. Sit amet nisl purus in mollis nunc sed.
          Ornare lectus sit amet est placerat in egestas. Ut diam quam nulla
          porttitor massa id neque aliquam. Et tortor consequat id porta nibh
          venenatis cras sed felis. Habitasse platea dictumst vestibulum rhoncus
          est pellentesque elit ullamcorper dignissim. At volutpat diam ut
          venenatis tellus in metus. A condimentum vitae sapien pellentesque
          habitant morbi.
        </Paragraph>
        <Paragraph placeholder margin="large"></Paragraph>
        <Paragraph placeholder margin="large"></Paragraph>
        <Paragraph placeholder margin="large"></Paragraph>
      </Article>
    </div>
  );
}

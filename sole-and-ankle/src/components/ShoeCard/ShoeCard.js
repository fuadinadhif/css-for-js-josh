import React from "react";
import styled from "styled-components";

import { formatPrice, pluralize, isNewShoe } from "../../utils";
import { COLORS, WEIGHTS } from "../../constants";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number' 
    ? 'on-sale' 
    : isNewShoe(releaseDate) 
      ? 'new-release' 
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={imageSrc} />
          {variant === "on-sale" && <FlagSale>Sale</FlagSale>}
          {variant === "new-release" && <FlagNew>Just Released!</FlagNew>}
        </ImageWrapper>
        <Row>
          <Name>{name}</Name>
          <Price variant={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" ? (
            <SalePrice>{formatPrice(price)}</SalePrice>
          ) : undefined}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  margin-bottom: 14px;
  border-radius: 16px 16px 4px 4px;
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 8px 12px;
  border-radius: 2px;
  color: ${COLORS.white};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.bold};
`;

const FlagSale = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const FlagNew = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ImageWrapper} + & {
    margin-bottom: 6px;
  }
`;

const Name = styled.h3`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;

const Price = styled.span`
  color: ${(props) =>
    props.variant === "on-sale" ? COLORS.gray[700] : COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  text-decoration: ${(props) =>
    props.variant === "on-sale" ? "line-through" : "none"};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

const SalePrice = styled.span`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeCard;

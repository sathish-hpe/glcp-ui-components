import React from 'react'
import { Card as GrommetCard, CardBody, CardFooter, Box } from 'grommet'
import PropTypes from 'prop-types'

import { Typography } from '../typography/Typography'
import { boxAlignments } from '../utils'

export const Card = ({
  background,
  foregroundColor,
  cardWidth,
  icon,
  title,
  subtitle,
  titleSize,
  description,
  action,
  CustomContent,
  textAlign,
  testId,
  ...rest
}) => (
  <GrommetCard
    background={background}
    width={cardWidth}
    data-testid={`card-${testId}`}
    {...rest}
  >
    <CardBody
      align={rest.align || 'start'}
      gap="small"
      direction={rest.direction}
      justify={rest.justify}
    >
      {CustomContent && CustomContent}
      {!CustomContent && (
        <>
          <Box
            pad={rest.justify === 'between' ? 'none' : { bottom: 'small' }}
            flex={{ shrink: 0 }}
          >
            {icon}
          </Box>
          <Box align={textAlign} data-testid={`${testId}-text-info`}>
            <Typography
              type="text"
              size={titleSize}
              weight="bold"
              testId={`${testId}-title`}
              color={foregroundColor}
            >
              {title}
            </Typography>
            {subtitle && (
              <Box margin={{ bottom: 'small' }}>
                <Typography
                  type="text"
                  size="small"
                  testId={`${testId}-subtitle`}
                  color={foregroundColor}
                >
                  {subtitle}
                </Typography>
              </Box>
            )}
            <Typography
              type="text"
              size="medium"
              testId={`${testId}-summary`}
              color={foregroundColor}
            >
              {description}
            </Typography>
          </Box>
        </>
      )}
    </CardBody>
    {action && <CardFooter margin={{ bottom: 'small' }}>{action}</CardFooter>}
  </GrommetCard>
)

Card.propTypes = {
  /**
   * This background color code will be used for card background
   */
  background: PropTypes.string,
  /**
   * Foreground color will be applied only on the title and the card body
   * Button color should be handled inside the button with <Typography> component
   */
  foregroundColor: PropTypes.string,
  /**
   * This can be either 'small' or 'medium'
   */
  cardWidth: PropTypes.oneOf(['small', 'medium']),
  /**
   * This will be an icon component
   */
  icon: PropTypes.element,
  /**
   * This property is mandatory and will be used for displaying the title of the card
   * This is mandatory.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This property will be used for displaying the title size
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This property will be used for displaying the subtitle size
   */
  titleSize: PropTypes.string,
  /**
   * Description of the card, up to a small paragraph; distinguished from Tile
   * with this text length difference among other reasons
   * This is mandatory.
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * textAlign prop is used to align the text content of the card (title and description)
   * This follows the grommets box alignments
   */
  textAlign: PropTypes.oneOf(boxAlignments),
  /**
   * This will be the action button will be placed at the bottom of the card
   */
  action: PropTypes.element,
  CustomContent: PropTypes.element,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: undefined,
  subtitle: '',
  description: undefined,
  background: '',
  foregroundColor: '',
  cardWidth: 'medium',
  icon: undefined,
  titleSize: 'medium',
  action: undefined,
  CustomContent: undefined,
  textAlign: 'start'
}

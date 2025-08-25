'use client'
import { Launch } from '@/interfaces/launches'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface LaunchLinksProps {
  links?: Launch['links']
}

const LaunchLinks = ({ links }: LaunchLinksProps) => {
  const linkStyle = 'text-sm dark:text-blue-400 text-blue-700'
  const { article, flickr, patch, reddit, webcast, wikipedia } = links || {}
  return (
    <>
      {flickr?.original?.[0] && (
        <p className="relative">
          <Image
            src={flickr.original[0]}
            alt="Flickr"
            title="Flickr"
            width={400}
            height={300}
            rel="noopener noreferrer"
          />
        </p>
      )}
      <div className="flex flex-row gap-2 mt-4 ">
        {article && (
          <p className={linkStyle}>
            <Link href={article} target="_blank" rel="noopener noreferrer">
              Article
            </Link>
          </p>
        )}

        {patch?.small ? (
          <p className={linkStyle}>
            <Link href={patch.small} target="_blank" rel="noopener noreferrer">
              Patch
            </Link>
          </p>
        ) : null}
        {reddit?.campaign && (
          <p className={linkStyle}>
            <Link href={reddit.campaign} target="_blank" rel="noopener noreferrer">
              Reddit Campaign
            </Link>
          </p>
        )}
        {webcast && (
          <p className={linkStyle}>
            <Link href={webcast} target="_blank" rel="noopener noreferrer">
              Webcast
            </Link>
          </p>
        )}
        {wikipedia && (
          <p className={linkStyle}>
            <Link href={wikipedia} target="_blank" rel="noopener noreferrer">
              Wikipedia
            </Link>
          </p>
        )}
      </div>
    </>
  )
}

export default LaunchLinks

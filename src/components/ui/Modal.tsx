"use client";

import type { ReactNode } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

interface ModalButton {
    label: string;
    onClick?: () => void;
    href?: string;
    variant?: "filled" | "outline";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

interface ReusableModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    buttons?: ModalButton[];
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    scrollBehavior?: "inside" | "outside" | "normal";
    showCloseButton?: boolean;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
}

const muiSize = { sm: "small", md: "medium", lg: "large" } as const;

export default function ReusableModal({
                                          isOpen,
                                          onClose,
                                          title,
                                          children,
                                          buttons = [],
                                          size = "md",
                                          scrollBehavior = "inside",
                                          showCloseButton = true,
                                          className = "rounded-3xl",
                                          headerClassName = "",
                                          bodyClassName = "",
                                          footerClassName = "",
                                      }: ReusableModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            size={size}
            placement="center"
            scrollBehavior={scrollBehavior}
            className={className}
            backdrop="blur"
            motionProps={{
                variants: {
                    enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                    exit: { y: -20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
                },
            }}
            classNames={{
                backdrop: "bg-black/40 backdrop-blur-xs",
                base: "border border-white/10 bg-surface text-white",
                closeButton: "hidden",
            }}
        >
            <ModalContent>
                {(onCloseModal) => (
                    <>
                        {(title || showCloseButton) && (
                            <ModalHeader className={`relative pr-14 ${headerClassName}`}>
                                {title && (
                                    <h2 className="font-heading text-lg font-semibold uppercase text-white">
                                        {title}
                                    </h2>
                                )}
                                {showCloseButton && (
                                    <button
                                        type="button"
                                        onClick={onCloseModal}
                                        aria-label="Close modal"
                                        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
                                    >
                                        <CloseIcon fontSize="small" />
                                    </button>
                                )}
                            </ModalHeader>
                        )}

                        <ModalBody className={bodyClassName} data-lenis-prevent>
                            {children}
                        </ModalBody>

                        {buttons.length > 0 && (
                            <ModalFooter className={footerClassName}>
                                {buttons.map((button) => (
                                    <Button
                                        key={button.label}
                                        href={button.href}
                                        onClick={button.onClick}
                                        variant={button.variant === "outline" ? "outlined" : "contained"}
                                        size={muiSize[button.size ?? "md"]}
                                        disabled={button.disabled}
                                        startIcon={button.iconPosition !== "right" ? button.icon : undefined}
                                        endIcon={button.iconPosition === "right" ? button.icon : undefined}
                                    >
                                        {button.label}
                                    </Button>
                                ))}
                            </ModalFooter>
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}